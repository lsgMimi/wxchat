<template>
<div>
	
	<ul v-if="evenlist.length>0">
		<slot name="lists" v-for="list in evenlist"  :group="list.group">	
			
	</slot>
	
	</ul>
	<ul v-if="oddlist.length>0">
	<slot name="list" v-for="list in oddlist" :text="list.text" :img="list.img" >	
	</slot>
	</ul>
</div>
</template>
<script>
export default{
props:['list'],
	data(){
		return{
			oddlist:[],
			evenlist:[]
		}
	},
	created:function(){
	this.oddlist=this.list.filter(function(val,index){
	if(index>=2){
		return val;
	}
	})
	this.evenlist=this.list.filter(function(val,index){
	if(index<2){
		return val;
	}
	})
		
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
	text-align: center;
	    line-height: .34rem;
	font-size: 16px;
	margin-left: .1rem;
}




</style>