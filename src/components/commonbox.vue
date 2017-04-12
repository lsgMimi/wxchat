<template>
	<div class="show-box">
	
	<div class="menuBox">
	<div v-if="showTips">
	<p class="comm-border detail" v-for="m in msgs" v-if="msgs">
	<span	class="iconfont icon-dialogue-bar-menu" v-if="m&&m.includes('退出微信')"></span>
	<span	class="iconfont icon-dialogue-bar-menu"  v-if="m&&m.includes('关闭微信')"></span>
	<span @click="exitWx(m)">{{m}}</span>
	</p>
	</div>
	
	<div v-if="!showTips">
	<p>
	额外大二班的点才能把道具包师傅
	</p>
	</div>
	</div>
	<transition name="slide-fade">
	<div class="box-btn" v-if="!showTips">
		<button class="btn btnOk" @click="showcommonbox">取消</button>
		<button class="btn btnCancel" @click="exit">退出</button>
	</div>
	</transition>
	</div>
</template>
<script>
export default{
props:['show','msgs'],
	data(){
	return{
		showTips:true,
		showMenu:false
	}
	},
	mounted:function(){
if(this.show)
	document.querySelector('.show-box').style.boxShadow='rgba(29, 28, 28, 0.8) 0px 0px 0px 100vmax';
	},
	watch:{
	show:function(){
	console.log(this.show);
	
	},
	msgs:function(){
	console.log(this.msgs);
	}
	},
	methods:{
	exitWx:function(m){
	if(m.includes('退出微信'))
	this.showTips=!this.showTips;
	else if(m&&m.includes('标为未读')){
	this.$emit('msgRead',false);
	}else if(m.includes('删除该聊天')){
	console.log("1");
	this.$emit('delContact');
	}
	},
	exit:function(){
	this.$router.push('/me/exitWx')
	},
	showcommonbox:function(){
	var m=false;
	this.$emit('showmsg',m);
	}
	}
}
</script>
<style>
.show-box{
	background:white;
	position:absolute;
	left:0;
	top:26%;
	right:0;
	margin:auto;
	width:2.3rem;

	border-radius:.03rem;
	border:.01rem solid #f5f5f5;
	z-index: 120;
}
.box-btn{
	display:flex;
	flex-direction:row;
	justify-content:flex-end;
}
.btnOk{
	color:#ccc;
}
.btnCancel{
	color:#19f119;
}
.btnOk,.btnCancel{
	
	margin-right:.06rem;
	padding:0rem .1rem;
	height:.3rem;
	background:none;
}
.menuBox div{
	display:flex;
	flex-direction:column;
	align-items:center;
	font-size:14px;
	margin-bottom:.1rem;
}
.menuBox p .iconfont{
	font-size:20px;
}
.menuBox div  p{
width:75%;
	display:flex;
	flex-direction:row;
	justify-content:space-around;
	margin-top: .12rem;
	padding:.05rem 0rem;

}
.menuBox div  p.detail:nth-last-child(1){
	border:none;
}
</style>