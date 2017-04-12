<template>
<div class="">
 <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
	<router-view name="default" keep-alive></router-view>
</transition>
	
</div>

</template>
<script>
//transition="back" 
import myFooter from './footer'
  import myHead from './head'
export default{
	data(){
		return{
		"enterAnimate":"",
		"leaveAnimate":""
		}
	},
	components:{
myFooter,myHead
	},
	methods:{
	},
	created:function(){
	
},
watch:{
	"$route"(to,from){
	const toDepth=to.path.split('/').length;
	const fromDepth = from.path.split('/').length;
	console.log(toDepth,fromDepth)
	 if (toDepth === fromDepth) {
                    return;
                }
                this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
                this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
                  console.log(this.enterAnimate, this.leaveAnimate )
                if (toDepth === 4||toDepth === 3) {
                    this.leaveAnimate = "animated fadeOutRight"
                }
	}
}
}
</script>
<style>
 @import "../assets/css/animate.css";
 .back-transition { 
  transition: transform .5s ease;
}
.back-enter{
  transform: translate(100%,0);
}
.back-leave {
  transform: translate(-100%,0);
}
</style>