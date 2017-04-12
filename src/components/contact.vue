<template>
<div class="">

	<router-view ></router-view>
</div>

</template>
<script>
import myFooter from './footer'
  import myHead from './head'
  import {Contacts} from '../user.js'
export default{
	data(){
		return{
			contact:[],
			showmsg:[]
		}
	},
	
	components:{
myFooter,myHead
	}
}
</script>
<style>

</style>