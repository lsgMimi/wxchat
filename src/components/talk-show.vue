<template>
<div>
<my-head :showmsg="showmsg" ></my-head>
	<div class="container talkDetail">
		<div class="commTalk comm two" v-if="mMsg" v-for="m in mMsg">
			<div class="talk-conten">
			<p >{{m.con}}</p>
			</div>
			<div class='commPic'>
			<img :src="me.img">
			</div>
			
		</div>
		<div class="commTalk comm two" v-if="group">
			<div class="talk-conten">
			<p >来来来来</p>
			</div>
			<div class='commPic'>
			<img :src="me.img">
			</div>
			
		</div>
		<div v-if="contact.length>0">
		<div class="commTalk comm one"  v-for="item in contact[0].msg"  v-if="contact[0].msg">
			<div class='commPic'>
				<img :src="contact[0].img">
			</div>
			<div class="talk-conten ">
				<p >{{item.content}}</p>
			</div>
		</div>
		</div>
		
		<div v-if="group">
		<div class="commTalk comm one"  >
			<div class='commPic'>
				<img :src="group.con[0].img">
			</div>
			<div class="talk-conten ">
				<p >132421434</p>
			</div>
		</div>
		</div>

		<div v-if="msgs" v-for="m in msgs" >
		<mycomponent :msgs="m.content" ></mycomponent>
		</div>
	</div>

		<my-footer @sendmsg='getMsg' ></my-footer>
	</div>
</template>
<script>
import Bus from '../bus.js'
import myFooter from './InputFooter'
  import myHead from './head'
  import {Contacts} from '../user.js'
    import {Self,msgss} from '../self.js'
  import {Group} from '../group.js'
const mycomponent={
props:['msgs'],
		watch:{
		msgs:function(){
			console.log(this.msgs);
		}
		},
	render:function(createElement){
	var _this=this;
	return createElement('div',{attrs:{class:'commTalk comm two'}},
	[
	createElement('div',{attrs:{class:'talk-conten'}},[createElement('p',_this.msgs)]),
	createElement('div',{attrs:{class:'commPic'}},[createElement('img',{attrs:{src:'//images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg'}})]
	)
	]
	
	)
	}
	
};
export default{
data(){
	return{
	msgs:'',
	mMsg:'',
	me:new Self(),
	mm:msgss,
	group:'',
	selectedUser:'',
	showmsg:[{
			headTitle:'B',
			msgnum:'',
			disAddMenu:false,
			disGender:true,
			disarrow:true,
			showCame:false,
			item:this.$route.params.id
			}],
			contact:''
	}
},

mounted:function(){
	
	var m=new Contacts();
	var g=new Group();
	var id=this.$route.params.id;
			if(Number(id)>99){

				g.getGroup().then((val)=>{
					val.forEach((v)=>{
					if(v.id==id){
					this.showmsg[0].headTitle=v.nickname;
					this.selectedUser=v;
					this.group=v;

					}
					})
				});

			}else{

			
			m.getContact().then((val)=>{
	this.contact=val.filter((v)=>{
	if(v.id==id){
	this.showmsg[0].headTitle=v.nickname;
	this.selectedUser=v;
		return v;
		
		}
		
	})
	
	this.contact[0].msg.forEach((v)=>{
			if(v.isRead){
			v.isRead=false;
			}
		})
		
		})
		this.mMsg=this.me.getmsg().then((v)=>{
		this.mMsg=v.filter((m)=>{
					
			if(m.toperson===this.contact[0].nickname){
			return m;
			}
		})
		
		})
			}
		

},
	components:{
myFooter,myHead,mycomponent
	},
	created:function(){
	Bus.$on('getMenu',data=>{
	
		this.showMenu=data;
	})
	},
	
	methods:{
	getMsg:function(data){
	this.msgs=data;
	var s={
	'time':new Date().getTime(),
	'toperson':this.selectedUser.nickname,
	'con':data[0].content
	};
	this.mm.push(s);
	this.me.msg=this.mm;
	
	}
	}
}
</script>
<style >
 @import '../assets/css/common.css';
.talkDetail{
	display: flex;
	flex-direction:column;
padding: 0 .05rem;
	background-color: #f0eff5;
	margin-top:.1rem;
}
.commPic img{
	width:.35rem;
	height: .35rem;
	border-radius: 0.04rem;
	
}
.talk-conten{
	max-width:70%;
	background:white;
	border-radius:.03rem;
	word-wrap: break-word;
	position:relative;
	line-height:.35rem;
	font-size:14px;
}
.one .talk-conten{
	margin-left:.15rem;
}
.one .talk-conten:before{
	content:"";
	display:inline-block;
	height:0;
	border-width:.10rem;
	border-color: transparent white  transparent transparent ;
	border-style:solid;
	position:absolute;
	left:-.20rem;
	top:.05rem;

}
.two .talk-conten{
	margin-right:.15rem;
	background:green;

}
.two .talk-conten:before{
	content:"";
	display:inline-block;
	height:0;
	border-width:.10rem;
	border-color: transparent   transparent transparent green ;
	border-style:solid;
	position:absolute;
	right:-.20rem;
	top:.05rem;

}
.one{
	margin-top:.1rem;
}
.two{
	justify-content:flex-end;
	margin-top:.1rem;
}
</style>