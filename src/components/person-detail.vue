<template>
<div>
<my-head  :showmsg="showmsg" ></my-head>
	<div class="personDetail container"> 
	 	<div class="person-head commMar" >
	 		<div class="div commWidth" v-if="contact">
	 		<img :src="contact[0].img" alt="pic" class="person-pic" v-if="contact">
	 		<div class="right-detail">
	 			<p class="person-name">{{contact[0].nickname}} <span class="gender-man gender"></span></p>
	 			<p class="person-wx">
	 			<span >微信号:</span>
	 			<span >{{contact[0].wxNumber}}</span></p>
	 			<p class="person-nick">
	 				<span >昵称:</span> 
	 				<span >{{contact[0].nickname}} </span>
	 			</p>
	 		</div>
	 		</div>
	 	</div>
	 		<div class="person-handle commMar ">
	 			<div class="commWidth comm-border comm">
	 				<p>设置备注和标签</p>
	 				<p></p>
	 			</div>
	 			<div class="commWidth comm">
	 				<p>电话号码</p>

	 				<p v-if="showTel">18812345678</p>
	 			</div>
	 		</div>
	 		<div class="person-more  commMar">
	 			<div class="commWidth comm-border comm">
	 				<p>地区</p>
	 				<p></p>
	 			</div>
	 			<div class="commWidth comm  comm-border">
	 				<p>个人相册</p>
	 				<p class="personPic">
	 					<ul class="pic-list comm">
	 					<li> <img src="static/images/find-bg.png" alt="pic"></li>
	 					<li> <img src="static/images/find-bg.png" alt="pic"></li>
	 					<li> <img src="static/images/find-bg.png" alt="pic"></li>
	 				</ul>
	 				</p>
	 			</div>
	 			<div class="commWidth comm">
	 				<p>更多</p>
	 				<p></p>
	 			</div>
	 		</div>
	 		<div class='sendBtns commMar '>
	 			<button class="btn btn-send commWidth ">发消息</button>
	 		</div>
	 		<div class='videoBtn commMar '>
	 			<button class="btn btn-video commWidth">视频聊天</button>
	 		</div>
	</div>
	</div>
</template>
<script>
import {Contacts} from '../user.js'
  import myHead from './head'
export default{
	props:['showTel'],
	data(){
		return{
contact:[],
showmsg:[
	{
		headTitle:'详细资料',
			
			disAddMenu:false,
			disGender:false,
			disarrow:true,
			showCame:false
	}]
		}
	},
	created:function(){
	var id=this.$route.params.id;
	console.log(id);
var m=new Contacts();
m.getContact().then((val)=>{
	this.contact=val.filter((v)=>{
	if(v.id==id){
	console.log(v);
		return v;
		
		}
		
	})
		
		})
	},components:{
	myHead
	}
}
</script>
<style scoped>
.personDetail{
display: flex;
	flex-direction:column;
padding: 0;
	background-color: #f0eff5;
}
.comm p{
	text-align: center;
	    line-height: .34rem;
	font-size: 16px;
	margin-left: .1rem;
	align-self: center;
	padding:.05rem 0;
}
.btn-send{
	font-size:16px;
	color:white;
	line-height:.3rem;
	background:green;
}
.sendBtns,.videoBtn{
	background:none;
}
.div .person-pic{
	width:.55rem;
	height:.55rem;
}
.right-detail{
	margin-left:.1rem;
}
.right-detail p{
	font-size:14px;
	color:#888;
}
.comm li{
	align-self: center;
	text-align:center;
	margin-right:.12rem;
}
.personPic .pic-list li img{
	height:.6rem;
	width:.6rem;
 display:inline-block;
 vertical-align:middle;
}
.btn-video{
	background:#ccc;
}
</style>