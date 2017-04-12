<template>
<div>
<my-head  :showmsg="showmsg" ></my-head>
	<div class="container my-setting " >
		<div class="commMar">
		<div class="comm-border commFlex">
			<div class="div">
				<p>帐号与安全</p>
			</div>
			
		</div>
			
		</div>
		<div class="commMar">
		<div class="comm-border commFlex">
			<div class="div">
				<p>新消息通知</p>
			</div>
			
		</div>
		<div class="comm-border commFlex">
			<div class="div">
				<p>隐私</p>
			</div>
			
		</div>
		<div class="comm-border commFlex">
			<div class="div">
				<p>通用</p>
			</div>
			
		</div>
		<div class=" commFlex">
			<div class="div">
				<p>新消息通知</p>
			</div>
			
		</div>
		</div>
		<div class="commMar">
		<div class="comm-border commFlex">
			<div class="div">
				<p>帐号与安全</p>
			</div>
			
		</div>
			<div class="commFlex"	@click="exit">
			<div class="div" >
				<p>退出</p>
			</div>
			
		</div>
		</div>
		<transition name="fade">
		<box v-if="showBox" :show="showBox" :msgs="msgs" @showmsg="getmsg()"></box>
		</transition>
	</div>
</div>
</template>
<script>
 import myHead from './head'
 import box from'./commonbox'
export default{
	data(){
	return{
		showmsg:[],
		showBox:false,
		msgs:['退出微信','关闭微信']
	}
	},
	created:function(){
	var msg={
		headTitle:'设置',
			msgnum:'',
			disAddMenu:false,
			disGender:false,
			disarrow:true,
			showCame:false,
			};
			this.showmsg.push(msg);
	},
	components:{
		myHead,box
		
	},
	methods:{
	exit:function(){
		this.showBox=!this.showBox;

	},
	getmsg:function(t){
	this.showBox=t;
	}
	}
}
</script>
<style scoped>

.my-setting{
	display: flex;
	flex-direction:column;
	padding: 0;
	background-color: #f0eff5;
}
.div p{
	text-align: center;
	    line-height: .34rem;
	font-size: 14px;
	margin-left: .1rem;
}

.arrow{
	align-self:center;
}

</style>