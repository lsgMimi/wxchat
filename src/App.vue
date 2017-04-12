<template>
  <div class="main">
 
  <router-view  v-if="showMain" ></router-view>
  <transition name="fade">
   <section class="welcome" v-show="welcome" >
   </section>
   </transition>
   <section class="mobile-tips"  v-if="isNotMobile&&!welcome"> 
   <div class="mobile-model">
    <img src="../static/images/mobile.png" alt="pic">
     </div>
    <p>手机浏览器访问</p>
    <button class="btn btnSure" @click.prevent='exitMobile'>关闭</button>
  
   </section>
  </div>
</template>

<script>
//  <router-view></router-view>
  import myFooter from './components/footer'
  import myIndex from './components/index'
  import myHead from './components/head'
  import myContact from './components/contact'
  import personDetail from './components/person-detail'
  import talkShow from './components/talk-show'
  export default {
    name: 'app',
    components: {
     myFooter,
     myIndex,
    myHead,myContact,
    personDetail,
    talkShow
    },
    data(){
      return{
         isNotMobile:false,
         welcome:true,
         showMain:false
      }
    },
    created:function(){
    let isMobile=function(){
    let userAgent=navigator.userAgent;
    console.log(userAgent)
  let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod")
  let flag=false;
  for(let v=0;v<Agents.length;v++){
  if(userAgent.indexOf(Agents[v])>0){
  flag=true;break;
  }
 
  }
   return flag;
    }();
    if(!isMobile){
    this.isNotMobile=true;
    }
   setTimeout(() => {
   this.showMain=true;
            this.welcome = false;
        }, 3000)
    },
    methods:{
 exitMobile:function(){
 this.isNotMobile=!this.isNotMobile;
 }
    }
  };
</script>

<style>
 @import 'assets/css/common.css';
 .welcome{
  width: 100%;
    height: 100%;
    z-index: 200;
    position: fixed;
    left: 0;
    top: 0;
    transition: .25s all linear;
    background: url(../static/images/launchimage.png) no-repeat center center;
    background-size: cover;
 }
 .mobile-tips{
 position:absolute;
 height:100%;
 width:100%;
 display:flex;
 flex-direction:column;
 jsutify-content:center;
 align-items:center;
 left:0;
 top:0;
 z-index:1000;
 background:black;
 opacity:.7;
 color:#ccc;
 text-align:center;
 padding:.12rem 0rem;
 }
 .mobile-model{
 margin:.5rem auto .2rem;
 }
 .btnSure{
 background:green;
 color:white;
 width:.45rem;
 margin-top:.2rem;
height:.35rem;
 }
</style>
