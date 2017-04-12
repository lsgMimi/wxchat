<template>
<div class="ss">
<my-head  :showmsg="showmsg" ></my-head>
<div class="container my-ss">
	<div class="main-content">
		<div class="core comm"></div>
		<div class="core1 comm"></div>
		<div class="core2 comm"></div>
		<div class="core3 comm"></div>

		<div class="line"></div>
		
	</div>
	<transition name="fade-in">
	<p class="tip" v-show="showTip">将二维码/条码放入框内，即可自动扫描</p>
	</transition>
</div>
<div class="footer-menu">
		<ul class="ss-ul">
			<li v-for="(m,index) in msg"  >

			<img :src="m.img" @click.prevent="select($event,index)">
			<p>{{m.menu}} </p>
			</li>
			
		</ul>
	</div>
</div>

</template>
<script>
//<p class="tips">没有可识别的内容轻触屏幕继续扫描</p>
  import myHead from './head'
export default{
	data(){
	return{
	showmsg:[{
	headTitle:'二维码/条码',
			
			disAddMenu:false,
			disGender:false,
			disarrow:true,
			showCame:false
	}],
	msg:[
	{
	img:'static/images/sao-yi-sao/scan-qr-code.png',
	menu:'扫码',
	selectImg:'static/images/sao-yi-sao/scan-qr-code_hl.png',
	title:'二维码/条码',
	tips:'将二维码/条码放入框内，即可自动扫描'
	},
	{
	img:'static/images/sao-yi-sao/scan-book.png',menu:'封面',selectImg:'static/images/sao-yi-sao/scan-book_hl.png',title:'封面/电影海报',tips:'将封面/电影海报放入框内，即可自动扫描'
	},
	{
	img:'static/images/sao-yi-sao/scan-street.png',menu:'街景',selectImg:'static/images/sao-yi-sao/scan-street_hl.png',title:'街景',tips:'扫一下周围环境，即可自动识别'
	},
	{
	img:'static/images/sao-yi-sao/scan-word.png',menu:'翻译',selectImg:'static/images/sao-yi-sao/scan-word_hl.png',title:'翻译',tips:'将英文单词放入框内'
	}
	],
	showTip:true,
	selectImg:''
	}
	},
	components:{
	myHead
	},
	created:function(){

	var t=document.querySelector('.tip');
	var self=this;
	
	setTimeout(function(){
	self.showTip=false;
	},3000)
	},
	mounted:function(){
	var img=document.querySelector('.ss-ul li>img');
	this.selectImg=img;
		img.src=this.msg[0].selectImg;
	},
	methods:{
	select:function($event,index){
	var oDiv=document.querySelector('.main-content');
	var tip=document.querySelector('.tip');
	var t=$event.target;
	var self=this;
	this.showmsg[0].headTitle=this.msg[index].title;
	if(this.selectImg){
	
		var s=this.selectImg.src;
		var i=s.indexOf('_hl.png');
		if(i>0){
			this.selectImg.src=s.substring(0,i)+".png"
		}
		
	}
	switch(t.tagName.toLowerCase()){
		case 'img':
		console.log(index,this.msg[index].selectImg)
		t.src=this.msg[index].selectImg;
		this.selectImg=t;
		break;
		case 'p':
		t.previousSbiling.src=this.msg[index].selectImg;
		this.selectImg=t.previousSbiling
		break;
		case 'li':
		t.firstChild.src=this.msg[index].selectImg;
		t.previousSbiling=t.firstChild;
		break;

	}
	
	
	this.showTip=true;
	setTimeout(function(){
	self.showTip=false;
	},3000)
	var line=document.querySelector('.line');
		line.style.animation='move 2s infinite'
		if(index==1||index==2){
		oDiv.style.width=2.6+'rem';
		oDiv.style.height=2.3+'rem';
		var line=document.querySelector('.line');
		line.style.animation='movess 3s infinite'
		}else if(index=3){
		var line=document.querySelector('.line');
		line.style.animation='moves 1s infinite'
		oDiv.style.width=1.6+'rem';
		oDiv.style.height=.5+'rem';
		}
	
		tip.innerText=this.msg[index].tips;
		
		
	
	}
	}
}
</script>

<style scoped>
.head {
	height: 9%;
}
.tip{ 
	color:#f5f5f5;
	font-size:12px;
	margin-top:.1rem;

}
.my-ss{
	display: flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	padding: 0;
	background-color: #2b2a2a;
	height:81%;
}
.ss-ul{
	display:flex;
	flex-direction:row;
	align-items:center;
	justify-content:space-around;
	width:100%;
}
.footer-menu{
	background:#2b2a2a;
	color:white;
	font-size:12px;
	position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height:10%;
}
.ss-ul li{
	width:25%;
	    text-align: center;
}
.ss-ul li img{
	width:.38rem;
}
.main-content {
    display: flex;
    width: 1.6rem;
    height: 1.5rem;
    border: .01rem solid green;
    align-self:center;
    position:relative;
}
.line{
position:relative;
	    width: 90%;
    height: .04rem;
    background: -moz-linear-gradient(to right,rgba(9, 187, 7, 0.35) 10%,rgba(9, 187, 7, 0.75) 80%,rgba(9, 187, 7, 0.69) 10%);
    background:-o-linear-gradient(to right,rgba(9, 187, 7, 0.35) 10%,rgba(9, 187, 7, 0.75) 80%,rgba(9, 187, 7, 0.69) 10%);
    background:-webkit-linear-gradient(to right,rgba(9, 187, 7, 0.35) 10%,rgba(9, 187, 7, 0.75) 80%,rgba(9, 187, 7, 0.69) 10%);
       background: linear-gradient(to right,rgba(9, 187, 7, 0.35) 10%,rgba(9, 187, 7, 0.75) 80%,rgba(9, 187, 7, 0.69) 10%);
    /* border-bottom: .01rem solid green; */
    margin: 0rem auto;
    border-radius: 2rem;
    animation:move 2s infinite;
    box-shadow: 0.01rem 0.01rem 0.16rem 0.04rem green;
}
.comm{
	content: '';
    position: absolute;
     width: .13rem;
    height: .13rem;
    border-width: .03rem;
    border-style: solid;
}
.core{
    left: 0;
    top: 0;
    border-color: green transparent transparent green ;
    
}
.core1{
	
    right: 0;
    top: 0;
   
    border-color: green green transparent transparent;
    
}
.core2{
	
    right: 0;
    bottom: 0;
   
    border-color:transparent green green  transparent;
   
}
.core3{
	
    left: 0;
   bottom: 0;
   
    border-color:  transparent transparent green green;
    
}

.main>div:nth-last-child(1){
	height:100%;
}
.ss{
	height:100%;
}
@keyframes moves{
	from{top:0}
	to{
	top:.45rem
	}
}
@keyframes movess{
	from{top:0}
	to{
	top:2.27rem
	}
}
@keyframes move{
	from{top:0}
	to{
	top:1.2rem
	}
}
</style>