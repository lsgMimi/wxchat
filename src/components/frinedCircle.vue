<template>
<div>
<my-head :showmsg="showmsg" ></my-head>
	<div class="container myCircle">
	<transition name="slide-fade">
		<div class="spin" v-if="loading"></div>
		</transition>
		<div class="CircleHeader">
		<div class="right-head" v-if="me">
					<p>{{me.nickname}}</p>
					<img :src="me.img">
					</div>
		</div>
		<div class="circle-main">
		<common :user="user">
			<template slot="circle" scope="props">
				
				<li class="comm  comm-border">
					<img :src='props.user.img' class="leftPic">
					<div class="Rdetail">
					<p class="fri-name">{{props.user.nickname}}</p>
					<p>{{props.user.circle[0].content}}</p>
					<div class="imgs">
					<img :src="item" v-for="item in props.user.circle[0].circle_img"/>
					</div>
					<div class="bottom">
					<span class="time">{{props.user.circle[0].times}}</span>
					<div class="menus">
					<transition name="fade-enter">
						<p class="bottom" v-show="props.user.showMenu">
						<span class="zan">赞</span>
						<span class="comment">评论</span>
						</p>
						</transition>
						<span class="iconfont icon-wechat" @click="showApp(props.user.nickname)"></span>
						</div>

					</div>
					</div>
				</li>
			</template>
		</common>
		</div>
	</div>
	</div>
</template>
<script>
import common from './commonKey'
 import myHead from './head'
  import {Self} from '../self.js'
 var spinner = new Spinner({
lines: 10,
length: 8,
width: 7,
radius: 5,
color: ['#0bb908','#19f119'],
speed: 1,
trail: 50,
shadow: false,
hwaccel: false, 
className: 'spinner',
top:'10%',
left:'10%'
}).spin();



export default{
	data(){
		return {
			user:[
				{nickname:'迷糊小姐',tel:'',area:'中国 浙江',sex:'女',img:'static/images/me_more-expression.png',remark:'',wxnumber:'weiwu_yehua',circle:[{
				content:"weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好",
				circle_img:['https://sinacloud.net/vue-wechat/images/bg/cover.jpg','https://sinacloud.net/vue-wechat/images/bg/cover.jpg'],
				times:"17小时前",
				comment:[{author:'百合',detail:'哈哈哈'}],
				approve:['野花','香菜']
				
				}],
				talk:[{}],
				showMenu:false
				},
				{nickname:'瑞克',tel:'',area:'中国 重庆',sex:'女',img:'static/images/me_more-expression.png',remark:'',wxnumber:'weiwu_yehua',circle:[
				{
				content:"拉拉拉拉拉拉拉拉拉拉拉拉拉拉拉拉拉拉",
				circle_img:['https://sinacloud.net/vue-wechat/images/bg/cover.jpg','https://sinacloud.net/vue-wechat/images/bg/cover.jpg'],
				times:"17小时前",
				comment:[{author:'僵尸',detail:'哇哇哇'}],
				approve:['蘑菇菌','香菜']
				}
				],
				
				talk:[{}],
				showMenu:false
				}
			],
			me:new Self('static/images/me_more-expression.png','hhh_dabaisha','大白白','德国 柏林','女'),
			loading:true,
			
			showmsg:[{
			headTitle:'朋友圈',
			msgnum:'',
			disAddMenu:false,
			disGender:false,
			disarrow:true,
			showCame:true,
			}]
		}
	},
	components:{
	common,myHead
	},
	mounted:function(){
	var target = document.querySelector('.spin');
target.appendChild(spinner.el)
	setTimeout(function(){
		spinner.stop();
			this.loading=false;
	},3000)
	
	},
	methods:{
	showApp:function(m){
	var index=0;
		var use=this.user.filter((n,i)=>{
			if(n.nickname==m){
			index=i;
				return n;
			}
		})
		var pBot=document.querySelectorAll('p.bottom');
		pBot=[].slice.call(pBot);
		this.user[index].showMenu=!this.user[index].showMenu;
		//pBot[index].style.display="flex";
	}
	}
}
</script>
<style scoped>
.CircleHeader{
	background:url(https://sinacloud.net/vue-wechat/images/bg/cover.jpg) no-repeat 50%;
	background-size:cover;
	height:3.7rem;
		position:relative;
		margin-bottom:.2rem;
		    width: 100%;
    
}
.myCircle{
	display: flex;
	flex-direction:column;
	padding: 0;
	background-color: #fff;

}
.menus{
	display:flex;
	flex-direction:row;
	align-items:center;
	justify-content:center;
}
.right-head{
width:100%;
position:absolute;
	display:flex;
	flex-direction:row;
	justify-content:flex-end;
	height:.5rem;
	align-items:center;
	right:3%;
	bottom:-.1rem;
}
.right-head p{
	font-size:18px;
	color:white;
	font-weight:500;
	margin-right:.15rem;
}
.right-head img{
	width:.7rem;
	height:.7rem;
}
.circle-main{
	position:relative;
	padding:.08rem 0rem;
	background:#fff;
}
.circle-main ul {
	display:flex;
	flex-direction:column;
}
.circle-main ul li{
	padding:0rem .15rem;
	
	margin-top:.1rem;
}
.comm .leftPic{
margin-right:.08rem;
	width:.45rem;
	height:.45rem;
}
.Rdetail{
	width:80%;
}
.Rdetail .imgs img{
	height:.8rem;
	width:auto;
	margin-right:.03rem;
}
p .time{
	color:#757575;
font-size:14px;
line-height:.2rem;
}
.Rdetail p{
	font-size:14px;
	margin-bottom:.05rem;
}
p.bottom{
		background:black;
	opacity:.7;
	height:.3rem;
	width:1.6rem;
	color:#ccc;
	display:flex;
	flex-direction:row;
text-align:center;
line-height:.3rem;
	justify-content:space-around;
	margin-right:.3rem;
align-self: center;
align-items: center;
margin-bottom: 0rem;
}
p.bottom span:nth-child(1){
	border-right:.01rem solid #2f2c2c;
}
p.bottom span{
	width:50%;
	display:inline-block;
	align-self:center;

}
div.bottom{
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	text-align:center;
	align-items:center;
height:.3rem;
}

</style>