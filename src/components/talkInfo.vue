<template>
<div>
<my-head  :showmsg="showmsg" ></my-head>
<div class="container my-msg"  >
	<div class="msgDetail commColomn">
		<div class='comm commMarg msg-img ' v-if="contact">
			<img :src="contact[0].img" alt="pic" >
			<span class="iconfont icon-chat-detail-add " ></span>
		</div>
		<div class='commMarg msg-img imgs ' v-if="isEmpty">
			<img :src="item.img" v-for="item in group.con">
			<span class="iconfont icon-chat-detail-add  addCon" ></span>
		</div>

		<div class=' commMarg commColomn  msg-menu'  v-if="isEmpty">
			<div class="comm comm-border">
			<p>群聊名称</p>
			<p></p>
			</div>
			<div class="comm comm-border">
			<p>群二维码</p>
			<p></p>
			</div>
			<div class="comm">
			<p>群公告</p>
			<p></p>
			</div>
		</div>
		<div class=' commMarg commColomn  msg-menu' >
			<div class="comms comm-border">
			<p>置顶聊天</p>
			<p class="change" @click="selctTop($event)">
			<span class="dot"></span>
			</p>
			</div>
			<div class="comm">
			<p>消息免打扰</p>
			<p></p>
			</div>
			
		</div>
		<div class=' commMarg commColomn msg-menu' v-if="isEmpty">
			
			<div class="comm comm-border">
			<p>我在本群的昵称</p>
			<p></p>
			</div>
			<div class="comm">
			<p>显示群成员昵称</p>
			<p></p>
			</div>
		</div>
		<div class=' commMarg commColomn  msg-menu' >
			<div class="comm comm-border">
			<p>设置当前聊天背景</p>
			<p></p>
			</div>
			<div class="comm comm-border">
			<p>查找聊天记录</p>
			<p></p>
			</div>
			<div class="comm">
			<p>清空聊天记录</p>
			<p></p>
			</div>
		</div>
		
		<div class=' commMarg commColomn  msg-menu' >
			
			
			<div class="comm">
			<p>投诉</p>
			<p></p>
			</div>
		</div>
			
	</div>
	
</div>
	</div>
</template>
<script>
import myFooter from './footer'
  import myHead from './head'
   import {Group} from '../group.js'
   import {Contacts} from '../user.js'
export default{
	data(){
	return{
	contact:'',
	selectedUser:'',
	group:[],
	selTop:false,
	showmsg:[
	{
		headTitle:'聊天信息',
			
			disAddMenu:false,
			disGender:false,
			disarrow:true,
			showCame:false
	}]
	}
	},
	components:{
myHead
	},
	created:function(){
	var id=this.$route.params.id;
	var m=new Contacts();
	if(Number(id)<100){
	m.getContact().then((val)=>{
	this.contact=val.filter((v)=>{

	if(v.id==id){
	this.selectedUser=v;
		return v;
		
		}
		
	})
	});
	}else{
	var g=new Group();
	g.getGroup().then((val)=>{
					
					val.forEach((v)=>{
					if(v.id==id){
					console.log(v);
					this.group=v;
					}
					})
				});
	}
	
	},
	methods:{
	selctTop:function($event){
	this.selTop=!this.selTop;
	var t=$event.target;
	switch(t.tagName.toLowerCase()){
	case 'p':
	var dot=document.querySelector('.dot');
		if(this.selTop){
		t.style.background='#0bb908';
		
		dot.style.left=.28+'rem';
		}else{
t.style.background='#ccc';
		
		dot.style.left=0+'rem';
		}
		
	break;
	case 'span':
	if(this.selTop){
t.parentNode.style.background='#0bb908';
	t.style.left=.28+'rem';
	}else{
	t.parentNode.style.background='#ccc';
	t.style.left=0+'rem';
	}
	
	break;
	}
	}
	},
	computed:{
	isEmpty:function(){
		if(Array.isArray(this.group)&&this.group.length>0){
			return true;
		}else if(typeof this.group =="object"&&!(this.group  instanceof Array)){
		for (var key in this.group) {
    return true;
  }
  return false;
		}
	}
	}
}
</script>
<style>
.my-msg{
	display: flex;
	flex-direction:column;
	padding: 0;
	background-color: #f0eff5;
}
.msg-img img{
width: .55rem;
height: .55rem;
padding: .05rem .13rem;
}
.imgs img{
padding: .05rem .08rem;
}
.msg-menu{
	padding: 0rem .13rem;
	font-weight: 500;
	font-size: 14px;
	line-height: .34rem;
}

.commMarg{
	margin-top: .1rem;
	background: white;
}
.msg-menu div{
	padding: .05rem 0rem;
}
.msg-img .iconfont{
	font-size: 30px;
	align-self:center;
	color: #bbb;
	display: inline-block;
	margin-left:.08rem;
	padding: .08rem .08rem;
	border-radius: .03rem;
	    font-weight: bold;
	border:.01rem solid #ccc;
}
.msg-img  .addCon{
margin-top: .06rem;
    vertical-align: top;
}
.change{
	width:.55rem;
	height:.27rem;
	border-radius: .6rem;
	background:#ccc;
	align-self:center;
	display: flex;
    align-items: center;
}
.dot{
	display:inline-block;
	width:.25rem;
	height:.25rem;
	background:white;
	border-radius:50%;
	position:relative;
}
</style>