<template>
<div>
<my-head  :showmsg="showmsg" ></my-head>
	<div class="container new-friend">
		<div class="commMar" style="padding: .03rem 0rem;">
		<div class="commFlex searchDiv ">
		<span class="iconfont icon-search"></span>
		<input type="text" placeholder="input" class="search" v-model="search">
		</div>
		</div>
		<p class="text commMar">新的朋友</p>
		<div class="friend-list commMar">
		<ul class="contaner-ul" v-if="addNew">
		<li v-for="i in addNew">
		<div class="left-content">
				<div class="pic">
					<img  alt="pic" :src="i.img">
					
				</div>
				<div class="content">
					<p class="p-name">
						{{i.nickname}}
					</p>
					<p class="p-talk">
						<span  title="friends">132434</span>
					</p>
				</div>
		</div>
		<div class="right-content">
		<button class="btn btn-add" v-if="!i.isAdd" @click="addFriend(i)">接受</button>
		<span v-else>已添加</span>
		</div>
				
		</li>
		</ul>
		</div>
		
	</div>
</div>
</template>
<script>
  import myHead from './head'
  import {Contacts} from '../user.js'
export default{
	data(){
	return{
	addNew:[],
	search:'',
	showmsg:[{
	headTitle:'新的朋友',
			msgnum:'1',
			disAddMenu:false,
			disGender:false,
			disarrow:true,
			showCame:false,
			m:'添加朋友'
	}]
	}
	},
	components:{
	myHead
	},
	created:function(){
	var m =new Contacts();
	m.getContact().then((v)=>{
	this.addNew=v;
	})
	},
	methods:{
	addFriend:function(m){
		m.isAdd=true;
	}
	},
	watch:{
	search:function(){
		console.log(this.search);
	}
	}
}
</script>
<style scoped>
.text{
	background-color: #f0eff5;
	font-size:12px;
	margin: .2rem 0 0 .1rem;
}
div.friend-list{
	margin-top:0;
}
.new-friend{
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	position:relative;
	padding:0;
	background-color: #f0eff5;
}
span.iconfont{
	font-size:18px;
	align-self:center;
	color: #9e9bad;
}
.btn-add{
height:auto;
width: 96%;
background: #50ad50;
color: white;
}
.search{
	padding:.08rem ;
	border:none;
	width:90%;
	font-size:14px;
}
.contaner-ul {
	display: flex;
	flex-direction:column;
	
}
.contaner-ul li  {
	display: flex;
	flex-direction:row;
	justify-content:space-between;
	border-bottom: 0.01rem solid #f3eded;
	align-items: center;
	
	position:relative;
	left:0;
	background-color: white;
	z-index:100;
	padding: .05rem .08rem;
}
.left-content{
	display: flex;
	flex-direction:row;

}
.searchDiv{

	border-bottom: .01rem solid #efeaea;
}
.pic{
	position: relative;
	display: flex;
align-items: center;
}
.pic img{
	width: .4rem;
	height:.4rem;
	
}
.content{
	margin-left: .08rem;
	display: flex;
	flex-direction:column;
	align-items:flex-start;
}
.content .p-name{
font-size: 16px;
line-height: .25rem;
height:.25rem;
color: #000;
}
.content .p-talk{
	font-size: 14px;
	color: #888;
	line-height: .23rem;
height:.23rem;
}
.right-content{
	align-self:center;
    display: flex;
    
    width: 15%;
}
.commFlex {
    display: flex;
    justify-content: space-between;
    width: 93%;
    margin: 0 auto;
}
</style>