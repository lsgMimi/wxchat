<template>
	<ul>
	<slot name="circle" v-for="list in user"  :user="list">	</slot>
	</ul>
</template>
<script>
export default{
props:['user'],
	data(){
		return {
		
		}
	}
}
</script>
<style>
</style>