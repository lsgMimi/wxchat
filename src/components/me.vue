<template>
<router-view></router-view>
</template>
<script>
import myFooter from './footer'

  import myHead from './head'
import personDetail from'./person-detail'
import commonShow from './commonshow'
	export default{
	data(){
		return {
			
		}
	},
	created:function(){
	
	},
	components:{
		personDetail,myFooter,myHead,
		commonShow
	}
	}
</script>
<style scoped>

</style>