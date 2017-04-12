import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import mainIndex from '../components/mainIndex'
import mainFind from '../components/mainFind'
import mainContact from '../components/mainContact'
import mainMe from '../components/mainMe'
import Contact from '../components/contact'
import Find from '../components/find'
import setting from '../components/setting'
import Me from '../components/me'
import talkContent from '../components/talk-show'
import talkInfo from '../components/talkInfo'
import personDetail from '../components/person-detail'
import Circle from '../components/frinedCircle'
import newFriend from '../components/newFriend'
import exitWx from '../components/exitWx'
import search from '../components/search'
import Sao from '../components/ss'
Vue.use(Router)
var IS_ROUTER_FIRST_CHANGE = true;

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children:[
      {path:'talk/:id',name:'talk',component:talkContent},
      {path:'search',component:search},
      {path:'talkInfo/:id',component:talkInfo},
      {path:'',component:mainIndex}
      ]
    },{
    	path:'/contact',
    	component:Contact,
     children:
      [
      {path:'detail/:id',component:personDetail},
       {path:'new',component:newFriend},
      {path:'',component:mainContact}
      ]
    },
   { path: "/", redirect: '/index' },
    {
      path:'/find',
      name:'find',
      component:Find,
      children:[
      {path:'circle',name:'circle',component:Circle},
       {path:'sao',component:Sao},
     { path:'',component:mainFind}
      ]
    },
    {
      path:'/me',
      name:'me',
      component:Me,
      children:[
      {path:'',component:mainMe},
      {path:'setting',component:setting},
      {path:'exitWx',component:exitWx}
      ]
    }
  ]
})
