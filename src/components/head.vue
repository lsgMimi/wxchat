<template>
<div class="head">

	<div class="head-title" >
	<div v-if="headMsg&&headMsg.length>0">
	<span class="icon-return-arrow iconfont" @click="back" v-if="headMsg[0].disarrow"></span>
		<span :class="{'talk-name':headMsg[0].disGender}">{{headMsg[0].headTitle}}</span>
		
		
		</div>
	</div>
	<div class="right-head">
	<div v-if="headMsg[0].disAddMenu">
		<span class="icon-search iconfont"></span>
		<span class="iconfont icon-tips-jia" @click="addMenu"></span>
		 <transition name="fade">
		<ul class="add-menu" v-if="showMenu" >
			<li>
				<p class="iconfont icon-wechat"></p>
				<p>发起群聊</p>
			</li>
			<li>
				<p class="iconfont icon-tips-add-friend"></p>
				<p>发起群聊</p>
			</li>
			<li>
				<p class="iconfont icon-wechat"></p>
				<p>发起群聊</p>
			</li>
			<li>
				<p class="iconfont icon-wechat"></p>
				<p>发起群聊</p>
			</li>
		</ul>
		</transition>
		</div>
		<div v-if="headMsg[0].disGender">
		<router-link class="icon-chat-person iconfont" tag="span" :to="{path:'/index/talkInfo/'+headMsg[0].item}"></router-link>
		</div>
	</div>
	
</div>
</template>
<script>
export default{
props:['showmsg'],

	data(){
		return{
			showMenu:false,
			headMsg:[
			{
		headTitle:'微信',
			msgnum:'1',
			disAddMenu:true,
			disGender:false,
			disarrow:false,
			showCame:false,
			}
			
			
			]
			
			
		}
	},
	watch:{
	headMsg:function(){
	
	}
	},
	created:function(){
	this.headMsg=this.showmsg;
		
		
	},
	methods:{
		addMenu(){
			this.showMenu=!this.showMenu;

		},
		back:function(){
		this.$router.back();
		}
	}
}
</script>
<style>
.head{
	display: flex;
flex-direction: row;
justify-content: space-between;
height: .45rem;
font-size: 18px;
background: #34343A;
color: white;
text-align: center;
line-height: .45rem;
padding: 0 .08rem;
 position: relative;
}
.right-head div  span {
   
    font-size: 22px;
    color: white;
    margin-left: .2rem;
   
}
.add-menu{
	    background: #34343A;
    position: absolute;
    right: 0;
    margin-right: .2rem;
    top: .5rem;
    color: white;
    width: 1.2rem;
    font-size: 16px;
    z-index: 999;
    border-radius:.03rem;
    padding:0rem .07rem;
}
.add-menu li{
	display:flex;
	flex-direction:row;
	height:.36rem;
	align-items:center;
	padding:.03rem 0rem;
}
.add-menu li p:nth-last-child(1){
	margin-left:.12rem;
}
.add-menu li{
	border-bottom:.01rem solid #424141;
}
.head-title .talk-name{
	display: inline-block;
    /* vertical-align: middle; */
    padding-left: .09rem;
    height: .2rem;
    margin-left: .05rem;
    line-height: .2rem;
    border-left: .01rem solid #545358;
}
.right-head .iconfont{
	font-size: 20px;
}
</style>