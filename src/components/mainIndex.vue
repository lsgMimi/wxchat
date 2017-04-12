<template>
<div>
<my-head  :showmsg="showmsg" ></my-head>
<div  class="container">
	<ul class="contaner-ul">
		<li  v-for="item in talkContact" >
		<div class="msg-li" v-swiper  v-long-press="{longPressContact:item,showBox:!showBox,showDialog:showDialog}" @click="gotoTalk(item,$event)">
			<div class="left-content">
				<div class="pic">
					<img :src="item.img" alt="pic">
					
					<i class="_news-count" v-if="msg[item.nickname].newsCount>0"  >{{msg[item.nickname].newsCount}}</i>
					
				</div>
				<div class="content">
					<p class="p-name">{{item.nickname}}
					</p>
					<p class="p-talk">
						<span  title="friends">{{item.nickname}}:</span>
						<span v-if="msg[item.nickname].newsCount>0">{{msg[item.nickname].readMsg[0].content}}</span>
						<span v-if="msg[item.nickname].newsCount==0">{{item.msg[0].content}}</span>
					</p>
				</div>
			</div>
			<div class="right-content">	
				<p class="content-time"><span>16:26</span></p>
				<p class="desc-mute iconfont icon-mute"></p>
			</div>
		</div>
				<div class="msgMenu">
					<div class="operate-unread" v-if="read">标为未读</div>
					<div class="operate-read" v-else>标为已读</div>
					<div class="operate-del">删除</div>
				</div>
			</li>
		<li v-if="group" v-for="m in group" @click="gotoTalk(m,$event)">
		<div class="msg-li" v-swiper>
		<div class="left-content">
				<div class="pic">
				<img :src="base[0]" alt="pic" v-if="base.length>0">
					<img :src="m.con[0].img" alt="pic" v-if="!base" >
					<i class="_news-dot"  ></i>
					
				</div>
				<div class="content">
					<p class="p-name">
						{{m.nickname}}
					</p>
					<p class="p-talk">
						<span  title="friends">{{m.con[0].nickname}}:</span>
						<span >11123234424</span>
					
					</p>
				</div>
			</div>
			<div class="right-content">
				<p class="content-time"><span>16:26</span></p>
				<p class="desc-mute iconfont icon-mute"></p>
			</div>
			</div>
		</li>
	
	</ul>
		<transition name="slide-fade">
		<box v-if="showBox" :show="showBox" :msgs="msgs" @showmsg="getmsg()" @msgRead="getRead()" @delContact="del()"></box>
		</transition>
</div>
<my-footer  :num="num"></my-footer>
	</div>
</template>
<script>
import myFooter from './footer'
  import myHead from './head'
    import {Contacts} from '../user.js'
     import {Group} from '../group.js'
import Bus from '../bus.js'
import box from'./commonbox'
import Vue from 'vue'
Vue.directive('longPress',{
	bind:function(el,binding) {
		var time=null;
		var func=binding.value;
		el.addEventListener('touchstart',function(e){
			time=setTimeout(function(){
		//m.showBox=func.showBox;
		
		var m=el.firstChild.firstChild.childNodes;
				m.forEach((v)=>{
				if(v.nodeName=='I'){
				var msgs=['标为已读','置顶聊天','删除该聊天'];
				
				func.showDialog(func.longPressContact,msgs);
				}else{
				var msgs=['标为未读','置顶聊天','删除该聊天'];
				func.showDialog(func.longPressContact,msgs);
				}
				})
			},1500)
		},false);
		el.addEventListener('touchend',function(e){
			clearTimeout(time);
		},false)
	}
})
export default{
	data(){
		return {
			showInput:true,
			showmsg:[{
		headTitle:'微信',
			msgnum:2||this.num,
			disAddMenu:true,
			disGender:false,
			disarrow:false,
			showCame:false,

			}],
			contact:[],
			talkContact:[],
			group:[],
			msg:{},
			member:[],
			base:[],
			num:0,
			imgs:[],
			read:false,
			longPressContact:[],
			showBox:false,
		msgs:['标为未读','置顶聊天','删除该聊天']
		}
	},
	directives:{
	swiper:{
		bind:function(element,binding){
			var isTouchMove,startX,startY;
			element.addEventListener('touchstart',function(e){
			var touches=e.touches[0];startX=touches.clientX;
			startY=touches.clientY;
			
			isTouchMove=false;
			},false);
			element.addEventListener('touchmove',function(e){
			var touches=e.touches[0],endX=touches.clientX,
			endY=touches.clientY;

			var distanceX=startX-endX;
			var distanceY=startY-endY;
			if(distanceX<0){
				if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (Math.abs(distanceX) > 20) {
                                    element.style.transition = "0.3s"
                                    element.style.marginLeft = 0 + "px"
                                }
                            }
			}else{
					if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (distanceX < 156 && distanceX > 20) {
                                    e.preventDefault()
                                    element.style.transition = "0s"
                                    element.style.marginLeft = -distanceX + "px"
                                    isTouchMove = true
                                }
                            }
			}
			},false)
			element.addEventListener('touchend', function(e) {
                        if (!isTouchMove) {
                            return;
                        }
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startX- endTx,
                            distanceY = startY - endTy,
                            isSwipe = false
                        if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                            if (distanceX < 0) {
                                return;
                            }
                            if (Math.abs(distanceX) < 60) {
                                isSwipe = true
                                element.style.transition = "0.3s"
                                element.style.marginLeft = 0 + "px"
                            } else {
                                element.style.transition = "0.3s"
                                element.style.marginLeft = "-160px"
                            }
                        }
                    }, false);
		}
	}
	},
	created:function(){
	
			var m=new Contacts();
		m.getContact().then((val)=>{
		this.contact=val;
		
		this.talkContact=this.contact.filter(
		(val)=>{
		if(val.isTalk&&val.msg){
		this.msg[val.nickname]={};
			this.msg[val.nickname].newsCount=0
			this.msg[val.nickname].readMsg=[];
			this.msg[val.nickname].time=''
		val.msg.forEach((v)=>{
		
			if(v.isRead){
			
			var s=new Date().getTime()
			this.msg[v.person].newsCount=this.msg[v.person].newsCount+1;
				this.num+=1;
				this.showmsg[0].msgnum=this.num;
				console.log(this.showmsg)
				var t=new Date(Number(v.time));
				//if(t.getTime)
				//console.log(new Date(Number(v.time)))
			this.msg[v.person].readMsg.push(v);

			}
			
				
		})
		return val;
		}
		})
		})

		var g=new Group();
		g.getGroup().then((val)=>{
		val.map((v)=>{
		if(v.isTalk){
		this.group.push(v);
			v.con.map((m,index)=>{
				if(index<3||index>4&&index<8||index>9&&index<13){
			
		this.imgs.push(m.img);
		}
				})
				this.draw();
		}
		})
		
			
		})
		
		
	},
	
	components:{
myFooter,myHead,box
	},
	methods:{
	gotoTalk:function(v,e){	
	if(this.showBox){
	e.preventDefault();
	this.showBox=!this.showBox
	return false;
	}else{
	this.showInput=false;
	this.$router.push('/index/talk/'+v.id);
	}
	},
	draw:function(){
		var c=document.createElement('canvas');
		var ctx=c.getContext('2d');
		var len=this.imgs&&this.imgs.length;
		c.width=50;
		c.height=50;
		ctx.rect(0,0,c.width,c.height);
		ctx.fillStyle='#fff';
	ctx.fill();
		this.drawing(0,len,ctx,c.width,c.height,c);
	},
	drawing:function(n,len,ctx,w,h,c){
	if(n<len){
	var self=this;
				var img=new Image();
				img.src=this.imgs[n];
				img.crossOrigin = 'Anonymous'; //解决跨域
				img.onload=function(){
						if(n<3){
				ctx.drawImage(img,n*w/3,0,w/3,h/3);
				}
				else if(n>=3&&n<6){		
				ctx.drawImage(img,(n-3)*w/3,h/3,w/3,h/3);
				}else if(n>=6){	
				ctx.drawImage(img,(n-6)*w/3,2*h/3,w/3,h/3);
				}
			self.drawing(n+1,len,ctx,w,h,c);
				}
	}else{
			this.base.push(c.toDataURL("image/jpeg",0.8));
				console.log(this.base)
			
			}
	},
	showDialog:function(m,t){
	this.longPressContact=m;
	this.msgs=t;
	this.showBox=!this.showBox;
	},
	
	getmsg:function(t){
	this.showBox=t;
	},
	getRead:function(t){
	this.msg[this.longPressContact.nickname].readMsg=[];
	var len=this.longPressContact.msg.length;
	this.msg[this.longPressContact.nickname].newsCount=1;
	
	this.longPressContact.msg[len-1].isRead=true;
this.msg[this.longPressContact.nickname].readMsg.push(this.longPressContact.msg[len-1])
	console.log(this.longPressContact.msg[0])
	this.showBox=!this.showBox;
	this.num+=1;
		this.showmsg[0].msgnum=this.num;

	},
	del:function(){
	var msg=document.querySelectorAll('.p-name');
	var s='';
	msg=[].slice.call(msg)
	msg.map((v)=>{
	s+=v.innerText+',';
	})
	s=s.trim().split(',').filter((v)=>{
	return v!==""
	});
	console.log(s);
	var t=0;
	s.filter((m,index)=>{
	if(m.includes(this.longPressContact.nickname)){
	t=index;
	return index;
	}
	})
	console.log(msg[t].parentNode.parentNode.parentNode.parentNode.parentNode)
	msg[t].parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(msg[t].parentNode.parentNode.parentNode.parentNode);
	this.showBox=!this.showBox;
	this.longPressContact.isTalk=false;
	this.longPressContact.msg="";
	}
	},
	computed:{
	
	}
}

</script>
<style scoped>

.contaner-ul {
	display: flex;
	flex-direction:column;

}
.contaner-ul li .msg-li {
	display: flex;
	flex-direction:row;
	justify-content:space-between;
	border-bottom: 0.01rem solid #ccc;
	padding: .08rem .03rem;
	align-items: center;
	width:100%;
	position:relative;
	left:0;
	background-color: white;
	z-index:100;
}
.contaner-ul li {
	position:relative;
	
}
.left-content{
	display: flex;
	flex-direction:row;

}
.pic{
	position: relative;
}
.pic img{
	width:.5rem;
	height: .5rem;
	border-radius: 0.04rem;
	
}
.content{
	margin-left: .12rem;
	display: flex;
	flex-direction:column;
	align-items:flex-start;
}
.content .p-name{
font-size: 18px;
line-height: .25rem;
height:.25rem;
color: #000;
}
.content .p-talk{
	font-size: 14px;
	color: #888;
	line-height: .23rem;
height:.23rem;
}
.right-content{
	align-self: flex-start;
    display: flex;
    flex-direction: column;
    width: 5%;
}
.contentDetails{
		display:flex;
	flex-direction:row;
	position:relative;
}
.msgMenu{
	position:absolute;
	right: -0.06rem;
	top:0;
	display:flex;
	z-index:98;
	height:100%;
}
.operate-unread,.operate-del,.operate-read{
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size:18px;

}
.operate-unread,.operate-read{
	background-color: #c7c7cc;
color: #fff;
padding:0 .12rem;
}
.operate-del{
	background-color: #ff3b30;
color: #fff;
padding:0 .08rem;
}
.content-time{
	color:#b2b2b2;
	font-size: 16px;
	    align-self: flex-end;
}
p.desc-mute{
	color: #b8b8b8;
	font-size: 14px;
align-self: flex-start;
    margin-top: .2rem;
}
</style>