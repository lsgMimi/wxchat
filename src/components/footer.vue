<template>
	<div class="footer">
	<ul class="footer-ul"  v-if="showMenu">
		<li >
		<router-link to="/index">
		<p  class="iconfont icon-wechat ">
		<i class="news_count"></i>
		</p>
		<p>微信</p>
		<i class="_news-count news" v-if="num>0">{{num}}</i>
		<i class="_news-count news" v-else>2</i>
		</router-link>
		</li>
		<li class="">
		<router-link to="/contact">
		<p  class="iconfont icon-contact">
		<i class="news_count"></i>
		</p>
		<p>通讯录</p>
		</router-link>
		</li>
		<li class="">
		<router-link to="/find">
		<p  class="iconfont icon-find">
		<i class="_news-dot newsDot"></i>
		</p>
		<p>发现</p>
		</router-link>
		</li>
		<li >
		<router-link to="/me">
		<p  class="iconfont icon-me">
		<i class="news_count"></i>
		</p>
		<p>我</p>
		</router-link>
		</li>
	</ul>
		<div class="inputMenu" v-if='!showMenu'>
			<span class="iconfont icon-dialogue-voice"></span>
			<input class="inputContent" type="text"  v-model="talkContent">
			<span class="expression iconfont icon-dialogue-smile"></span>
			<span class="more iconfont icon-dialogue-jia" v-if="!showBtn"></span>
			<button class="btn sendBtn" v-if="showBtn" v-on:click="sendContent">发送</button>
			
		</div>
		<transition name="fade">
		<div class="inputKey" v-if="showKey">
				<div class="key-header">
				</div>
				<div class="mainKey">
				<ul class="keys">
					<li>
						<span>Q</span>
						<span>W</span>
						<span>E</span>
						<span>R</span>
						<span>T</span>
						<span>Y</span>
						<span>U</span>
						<span>I</span>
						<span>O</span>
						<span>P</span>
						<span>×</span>
					</li>
					<li class="sec">
						<span>Q</span>
						<span>W</span>
						<span>E</span>
						<span>R</span>
						<span>T</span>
						<span>Y</span>
						<span>U</span>
						<span>I</span>
						<span>O</span>
						<span class="return">return</span>
						
					</li>
					<li class="thi">
						<span class="thi-f"></span>
						<span>W</span>
						<span>E</span>
						<span>R</span>
						<span>T</span>
						<span>Y</span>
						<span>U</span>
						<span>I</span>
						<span>O</span>
						<span>P</span>
						<span class="thi-f"></span>
					</li>
					<li>
						<span class='change-utf'>.?123</span>
						<span class="ball">W</span>
						
						<span class="tab">P</span>
						<span class='change-utf'>.?123</span>
						<span class='close'>×</span>
					</li>
				</ul>
				</div>
			</div>
			 </transition>
	</div>
</template>
<script>

export default{
		props:['num'],
	data(){
		return{
			showBtn:false,
			showKey:false,
			talkContent:'',
			count:0,
			showMenu:true
		}
	},
	
	watch:{
		talkContent:function(){
		if(this.talkContent)
		this.showBtn=true;
		},
		showMenu1:function(){
		console.log(this.showMenu1)
		}
	},
	methods:{
	inputTalk:function(){
	this.showKey=true;
	if(this.talkContent){
		this.showBtn=true;
	}
	},
	sendContent:function(){

	}

	}
}
</script>
<style scoped>
.footer{
	position: fixed;
    bottom: 0;
    left: 0;
	width: 100%;
	height: .5rem;
    background: #f5f5f5;
    text-align: center;
    border-top: .01rem solid #ccc;
        z-index: 1000;
}
.footer-ul{
	display: flex;
	flex-direction:row;
	align-items:center;
	justify-content:space-around;
	height:100%;
	
}
p.iconfont{
	font-size: 28px;
}
.footer-ul li{
	text-align:center;
	cursor: pointer;
	position:relative;
	width:25%;
}


.curr{
	color: #0bb908;
}
a.router-link-active{
	color:#0bb908;
	}
.inputMenu {
	display:flex;
	align-items:center;
	justify-content:space-between;
	text-align:center;
	vertical-align:middle;
	position: relative;
   
    z-index: 2001;
	}
.inputMenu  span.iconfont{
	font-size:30px;
	align-self:center;
	line-height:.5rem;
	}
	.inputContent{
	border:none;
	padding:.06rem .1rem;
	font-size:18px;
	height:200%;
	width:85%;
	border-radius:.03rem;
	border-bottom:.01rem solid rgba(202, 195, 195, 0.6);
	}
	.sendBtn{
		height:.3rem;
		color:white;
		background:green;
		margin-right:.03rem;
		width:.45rem;
	}
	.inputKey{
	position:absolute;
	z-index:1200;
	
	width:100%;
	background:#f5f5f5;
	}
	.key-header{
	background:#fffffe;
	height:.3rem;
	}
	.mainKey{
	background:#ccc;
	padding:0rem .05rem;
	}
	.keys  .sec{
	margin-left:.2rem;

	}
	.keys li {
	display:flex;
	width:100%;
	flex-direction:row;
	justify-content:space-around;
	align-items:center;
	margin-top:.04rem;
	}
	.keys li:nth-child(1){
	margin-top:0rem;
	padding-top:.04rem;
	}
	.keys li span{
	display:flex;
	width:8%;
	display:inline-block;
	flex-direction:row;
	background:white;
	height:.4rem;
	border-radius:.04rem;
	line-height:.4rem;
	font-size:18px;
	}
.keys li span.return{
	 width:12%;
	 background:#757575;
	}
	.keys li span.change-utf ,.thi span.thi-f{
    background: #757575;
}
.keys li span.tab {
    width: 50%;
}
.fade-enter-active, .fade-leave-active{
	transition: all 0.5s ease;
}
       
.fade-enter,.fade-leave-active{
	 opacity: 0;
}
li a .news {
    left: 50%;
    top: .02rem;
}
li a .newsDot{
	left: 52%;
    top: .03rem;
}
</style>