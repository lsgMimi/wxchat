<template>
<div>
<my-head  :showmsg="showmsg" ></my-head>
	<div class="container my-search">
		<p class="txt">搜索指定内容</p>
		<p class="content">
		<span>朋友圈</span>
		<span>文章</span>
		<span>公众号</span>
		</p>
		<p class="content comm-border">
		<span>朋友圈</span>
		<span>文章</span>
		<span>公众号</span>
		</p>
		<div class="hot-artical">
		<img src="static/images/book.png" class="book">
		<span>朋友圈热文</span>
		</div>
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
components:{
	myHead
},
	created:function(){
	var msg={
		headTitle:'',
			msgnum:'',
			disAddMenu:false,
			disGender:false,
			disarrow:true,
			showCame:false,
			showSearch:true
			};
			this.showmsg.push(msg);
			//var s=new Self();
	},
}
</script>
<style scoped>
.my-search{
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items: center;
	background:#f5f5f5;
	padding-top:.13rem;
	height:100%;
}
.my-search p{
	width:100%;
	font-size:14px;
	line-height:.33rem;
	text-align:center;
}
.txt{
	color:#999;
}
.content{
	color:#09bb07;
	font-size: 14px;
	display:flex;
	flex-direction:row;
	justify-content:space-around;
	    box-sizing: border-box;
	    margin-bottom:.15rem;
}
.hot-artical{
	color: #999;
    font-size: 13px;
    text-align:left;
    width:88%;
    height:.4rem;
    border-top:.01rem solid #ccc;
    display:flex;
	flex-direction:row;
	align-items:center;
}
.book{
	width:.2rem;
	display:inline-block;
	margin-right:.12rem;
}
</style>