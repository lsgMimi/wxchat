<template>
<div>
 <my-head :showmsg="showmsg"></my-head>
	<div class="my-find container">
	<div class="commMar">
		<div class="  ciDiv commFlex" @click="goCircle()">
		<div class="div ">
			<img src="../assets/images/find_icon-circle.png">
			<p>朋友圈</p>
		</div>
		<p class="arrow"></p>
	</div>
	</div>
	<div class="syDiv commMar">
		<div class="SS  comm-border commFlex" @click="goSS()">
			<div class="div">
				<img src="../assets/images/find_icon-circle.png">
				<p>扫一扫</p>
			</div>
			<p class="arrow"></p>
		</div>
		<div class="YY  commFlex">
			<div class="div">
				<img src="../assets/images/find_icon-circle.png">
				<p>摇一摇</p>
			</div>
				<p class="arrow"></p>
		</div>
	</div>
	<div class="commMar fhDiv">
		<div class="  nh comm-border commFlex">
			<div class="div ">
				<img src="../assets/images/find_icon-circle.png">
				<p>附近的人</p>
			</div>
				<p class="arrow"></p>
		</div>
		<div class="  ft commFlex">
			<div class="div ">
				<img src="../assets/images/find_icon-circle.png">
				<p>漂流瓶</p>
			</div>
				<p class="arrow"></p>
		</div>

	</div>
	<div class="pxDiv commMar" >
		<div class="SP  comm-border commFlex">
			<div class="div">
				<img src="../assets/images/find_icon-circle.png">
				<p>购物</p>
			</div>
				<p class="arrow"></p>
		</div>
		<div class="YX  commFlex">
			<div class="div">
				<img src="../assets/images/find_icon-circle.png">
				<p>游戏</p>
			</div>
				<p class="arrow"></p>
		</div>
	</div>

	<div class="commMar">
		<div class="   spDiv commFlex">
			<div class="div ">
				<img src="../assets/images/find_icon-circle.png">
				<p>附近的人</p>
			</div>
				<p class="arrow"></p>
		</div>
		
	</div>
</div>
<my-footer ></my-footer>
	</div>
</template>
<script>
import myFooter from './footer'
  import myHead from './head'
export default{
	data(){
		return{
			showmsg:[]	
		}
	},
	created:function(){
	var msg={
		headTitle:'微信',
			msgnum:'',
			disAddMenu:true,
			disGender:false,
			disarrow:false,
			showCame:false,
			};
			this.showmsg.push(msg);
	},
	components:{
	myFooter,myHead
	},
	methods:{
	goCircle:function(){
	this.$router.push('/find/circle');
	},
	goSS:function(){
	this.$router.push('/find/sao');
	}
	}
}
</script>
<style scoped>
.my-find{
	display: flex;
	flex-direction:column;
	padding: 0;
	background-color: #f0eff5;
}

.div img{
	width: .2rem;
	height: .2rem;
	display: block;
	    align-self: center;
}

.div p{
	
	    line-height: .34rem;
	font-size: 14px;
	margin-left: .1rem;
}

.arrow{
	align-self:center;
}


</style>