<template>
<div>
<my-head  :showmsg="showmsg" ></my-head>
	<div class='me-detail container'>
		<div class="person-head commMar" v-if="me">
	 		<div class="commFlex commWidth">
	 		<div class="div">
	 		<img :src="me.img" alt="pic" class="person-pic">
	 		<div class="right-detail">
	 			<p class="person-name">{{me.nickname}}</p>
	 			<p class="person-wx">
	 			<span >微信号:</span>
	 			<span >{{me.wxNumber}}</span></p>
	 			
	 		</div>
	 		</div>
	 		<div class="left-pic" @click.prevent="showCodes">
	 		<img :src="me.codeImg" alt="pic" class="person-pic">
	 		</div>
	 		</div>
	 	</div>
		<common-show :list="list">
		<template slot="lists" scope="props">
		<div class="commMar ">
				<div class="comm-border commFlex">
					<div class="div ">
						<img :src="props.group[0].img">
						<p class="me-p">{{props.group[0].text}}</p>
					</div>
					
				</div>
		<div class=" commFlex">
			<div class="div ">
				<img :src="props.group[1].img">
						<p class="me-p">{{props.group[1].text}}</p>
			</div>
			
		</div>

	</div>
		</template>
			<template slot="list" scope="props">
			<div class="commMar">
			<div class="  ciDiv commFlex"  @click="goSetting($event)" :data-setting="props.text">
			<div class="div " >
					<img :src="props.img">
					<p class="me-p">{{props.text}}</p>
				</div>
				
		</div>
		</div>
			</template>
		</common-show>

	</div>
	<div class="showCodePic" v-if="showCode">
		
			<div class="code-header comm" v-if="me">
			<img 	:src="me.img" alt="pic" class="person-pic">
			<div class="right-detail">
	 			<p class="person-names">{{me.nickname}}<span class="gender gender-man"></span></p>
	 			<p class="code-area">
	 			<span >微信号:{{me.wxNumber}}</span>
	 			</p>
	 			
	 		</div>
	 		</div>
	 		<img  class='main-code' src="static/images/code.jpg">
	 		<p></p>
			</div>
		
	<my-footer ></my-footer>
	</div>
</template>
<script>
import myFooter from './footer'
  import {Self} from '../self.js'
  import myHead from './head'
import personDetail from'./person-detail'
import commonShow from './commonshow'
	export default{
	data(){
		return {
			hastel:false,
			showCode:false,
			showmsg:[],
			list:[
			{
			group:[
			{img:"static/images/me_more-my-album.png",text:'相册'},
			{img:'static/images/me_more-my-favorites.png',text:'收藏'}
			]
			},
			{group:[
			{img:'static/images/me_more-my-favorites.png',text:'钱包'},
			{img:'static/images/me_more-my-favorites.png',text:'卡包'}
			]
			},
			
			{img:'static/images/me_more-my-favorites.png',text:'钱包'},
			{img:'static/images/me_more-my-favorites.png',text:'设置'}
			],
			me:new Self('static/images/me_more-expression.png','hhh_dabaisha','大白白','德国 柏林','女')
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
			//var s=new Self();
	},
	components:{
		personDetail,myFooter,myHead,
		commonShow
	},
	methods:{
	goSetting:function(e){
	if(e.target.dataset.setting.includes('设置')){
	this.$router.push('/me/setting');
	}else if(e.target.dataset.setting.includes('钱包'))
	console.log('1')
	},
		showCodes:function(){
		this.showCode=!this.showCode;
	}
	}

	}
</script>
<style scoped>
.me-detail{
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
.div .me-p{
	    line-height: .34rem;
	font-size: 14px;
	margin-left: .1rem;
}

.commMar .arrow{
	align-self:center;
	    line-height: .44rem;
}

.div .person-pic{
	width:.55rem;
	height:.55rem;
	
}
.right-detail{
	margin-left:.1rem;
}
.right-detail .person-name{
	color:black;
}
.right-detail p{
	font-size:14px;
	color:#888;
	text-align:left;
	align-self:center;
	line-height:.25rem;
}

.showCodePic{
position:absolute;
	z-index:2000;
	box-shadow:rgba(29, 28, 28, 0.8) 0px 0px 0px 100vmax;
	background:white;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	    top: 50%;
    left: 50%;
    width: 2.5rem;
    height: 3.8rem;
    transform: translate(-50%,-50%);
}

.left-pic{
	align-self:center;
}
.left-pic .person-pic{
	width:.25rem;
	height:.25rem;
}

.main-code{
margin-top:.25rem;
	width:2.5rem;
	height:,3rem;
}
</style>