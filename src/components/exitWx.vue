<template>
<div class="exit" style="overflow-y: hidden;">
<my-head  :showmsg="showmsg" ></my-head>
<div class="container exit-wx" >
	<div class="headImg">
		<img src="../assets/images/me_more-expression.png" alt="pic">
	</div>
	<p class="wx-number">hhh_dabaisha</p>
	<p class="passBorder">
	<span class="font icon-lock"></span>
	<input class="ipt" placeholder="please">
	</p>
	<button class='btn btnLogin'>login</button>
	<p class="fgt">忘记密码</p>
	<p class="selectMore">更多</p>
</div>
</div>
</template>
<script>
  import myHead from './head'
export default{
	data(){
	return{
		showmsg:[]
	}
	},
	created:function(){
		this.showmsg=[{
		headTitle:'微信',
			msgnum:'1',
			disAddMenu:false,
			disGender:false,
			disarrow:false,
			showCame:false,
		}]
	},
	components:{
	myHead
	}
}
</script>
<style >
body,.exit,.main{
	height:100%;
}
.exit-wx{
	display:flex;

	align-items:center;
	flex-direction:column;

margin:0;
padding-top: .8rem;
}
.exit-wx p:nth-child(3){
	width:85%;
	display:flex;
	align-items:center;
	justify-content:center;
margin-top:.12rem;
}
.headImg img{
	width:.8rem;
	height:.8rem;
	margin-bottom:.1rem;
}
.selectMore{
	margin-bottom:0rem;
}
.wx-number{
	font-size:16px;
}
.passBorder{
	border-bottom:.01rem solid #21ef21;
}
.passBorder .font{
	color:#21ef21;
	font-size:18px;
}
.passBorder .ipt{
	border:none;
	width:90%;
	padding:.03rem .12rem;
	height: .23rem;
    line-height: .23rem;
    font-size: 16px;
}
.btnLogin{
	width:85%;
	margin-top:.13rem;
	background:#3eb53e;
	color:white;
	 font-size: 16px;
	text-align:center;
}
.fgt{
	margin-top:.13rem;
	color:#2e2e5a;
	font-size: 16px;
	text-align:center;
}
.selectMore{
	position:fixed;
	bottom:.32rem;
	color:#2e2e5a;
}
</style>