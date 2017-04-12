<template>
	<div class="footer">
	
		<div class="inputMenu" >
			<span class="iconfont icon-dialogue-voice" v-if="showTalk" @click="changeStyle()"></span>
			<span class="iconfont icon-dialogue-jianpan"  v-if="!showTalk" @click="changeStyle()"></span>
			<input class="inputContent" type="text"  v-model="talkContent" v-if="showTalk">
			<div class="chat-say" v-show="!showTalk" v-press>
				<span class="ones" >按住 说话</span> 
				<span class="twos" style="display:none">松开 结束</span>
			</div>
			<span class="expression iconfont icon-dialogue-smile"></span>
			
			<span class="more iconfont icon-dialogue-jia" v-if="!showBtn"></span>
			<button class="btn sendBtn" v-if="showBtn" v-on:click="sendContent">发送</button>
			
			<div class="recording" style="display:none">
				<div class="recording-voice commRecord"  style="display:none">
				<div class="voice-inner">
					<div class="voiceIcon">
					</div>
					<div class="voiceVolumn">
					</div>
				</div>
				<p>手指上滑,取消发送</p>
				</div>
				<div class="recording-cancel commRecord" style="display:none">
					<div class="cancel-inner">
					</div>
				<p>松开手指,取消发送</p>
				</div>
			</div>
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
	data(){
		return{
			showBtn:false,
			showKey:false,
			talkContent:'',
			count:0,
			showTalk:true,
			press:false,
			touch:false,
			msg:[]
		}
	},
	
	watch:{
		talkContent:function(){
		if(this.talkContent)
		this.showBtn=true;
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
	console.log(this.talkContent);
	var m={};
	m.time=new Date().getTime();
	m.content=this.talkContent;
	console.log(m)
	this.msg.push(m);
	//this.msg.push(this.talkContent)
	this.$emit('sendmsg',this.msg);
	this.talkContent="";
	},
	changeStyle:function(){
		this.showTalk=!this.showTalk;
	}
	},
	directives:{
	press:{
		bind(element,binding){
		var startX,startY;
		element.addEventListener('touchstart',function(e){
		var recording=document.querySelector('.recording');
		
		var recordingVoice=document.querySelector('.recording-voice');
		element.className="chat-say say-active";
		recording.style.display="block";
		var ones=document.querySelector('.ones');
		ones.style.display="none";
		var twos=document.querySelector('.twos');
		twos.style.display="block";
		recordingVoice.style.display="block";
		var touches=e.touches[0],startX=touches.clientX,startY=touches.clientY;
		e.preventDefault();
		},false)
		element.addEventListener('touchend',function(e){
		var recording=document.querySelector('.recording');
		var recordingVoice=document.querySelector('.recording-voice');
		var recordingCancel=document.querySelector('.recording-cancel');
		var ones=document.querySelector('.ones');
		ones.style.display="block";
		var twos=document.querySelector('.twos');
		twos.style.display="none";
		element.className="chat-say";
		recordingCancel.style.display=recording.style.display=recordingVoice.style.display="none";
		e.preventDefault();
		},false)
		element.addEventListener('touchmove',function(e){
		var recording=document.querySelector('.recording');
		var recordingVoice=document.querySelector('.recording-voice');
		var recordingCancel=document.querySelector('.recording-cancel');
		var touches=e.changedTouches[0];
		var endX=touches.clientX,endY=touches.clientY,
		distanceX=startX-endX,
		distanceY=startY-endY;
		if(distanceY>10&&distanceY<80){
		element.className="chat-say",
		recordingCancel.style.display="block";
		recordingVoice.style.display="none";
		}else if(distanceY>80){
		element.className="chat-say",
recording.style.display=recordingCancel.style.display="none";
		}
		e.preventDefault();
		},false);
		}
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

p.iconfont{
	font-size: 28px;
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
 li  a .news{
 left:.15rem;
 }

 .commRecord{
 	position: absolute;
 	z-index: 1000;
 	left:0;
     top: -5rem;
 	bottom: 0;
 	right:0;
 	margin: auto;
 	color:white;
 	width: 1.5rem;
 	height:1.6rem;
 	border-radius: .03rem;
 }
 .recording-voice{
 	
 	background: #777779;
 	
 }
 .recording p{
 	font-weight: 600;
    margin-top: .2rem;
    text-align: center;
 }
 .voice-inner{
 	display: flex;
 	flex-direction:row;
 	align-items:center;
 	justify-content:center;
 }
 .cancel-inner{
 	background: url('/static/images/record-cancel.png') no-repeat ;
 	width: 1.1rem;
 	height: 1.1rem;
 	background-size: contain;
 }
 .voiceIcon{
 	background: url('/static/images/recording-bkg.png') no-repeat 50%;
 	width: .55rem;
 	height: 1rem;
 	background-size: contain;
 }
 .voiceVolumn{
 	background: url('/static/images/recording-signal.png') no-repeat 50%;
 	width: .55rem;
 	height: 1rem;
 	background-size: contain;
 }
 .recording-cancel{
 	display: flex;
 	flex-direction:column;
 	align-items:center;
 }
.chat-say{
		height:200%;
		padding:.08rem .1rem;
		width:85%;
		display: flex;
justify-content: center;
align-items: center;
background: white;
	border-radius:.03rem;
	color: #565656;
	border:.01rem solid #7d7e83;
	}
	.chat-way .one{
		font-weight: 500;

	}
	.say-active{
	background:#f5f5f5;
	}
</style>