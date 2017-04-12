import {Contacts,Contact} from './user.js'
function Group(codePic,nickname,remrk,id,isTalk,con){
this.codePic=codePic;
this.nickname=nickname;
this.remrk=remrk;
this.id=id;
this.isTalk=isTalk;
this.con=con||Contact;
}
let group=[

new Group('//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg','find your dream','A',100,true,[
	new Contacts('static/images/find-bg.png','qiaoyu68','twest','群聊','中国 河北','女','A',10,false,
	),
	new Contacts('static/images/IMG_3299.jpg','lll_90','大大东','群聊','英国 伦敦','男','',11,true),
	new Contacts('static/images/contact_top-offical.png','q_miss_white','q小姐','群聊','德国 柏林','女','',15,true),
	new Contacts('static/images/me_more-expression.png','dreamlist','王小胖','通过分享名片','中国 陕西','女','B',12,false),
	new Contacts('static/images/IMG_3299.jpg','qiaoyu','miss','群聊','中国 河北','女','A',13,false),
	new Contacts('static/images/me_more-expression.png','wxid_yangtao','阿涛','群聊','中国 河北','男','杨涛',14,false),
	new Contacts('static/images/find-bg.png','wxid_yangtao','阿涛','群聊','中国 河北','男','杨涛',14,false),
	new Contacts('static/images/find-bg.png','wxid_yangtao','阿涛','群聊','中国 河北','男','杨涛',14,false),
	new Contacts('static/images/contact_top-offical.png','wxid_yangtao','阿涛','群聊','中国 河北','男','杨涛',14,false),
	new Contacts('static/images/contact_top-offical.png','wxid_yangtao','阿涛','群聊','中国 河北','男','杨涛',14,false),
	new Contacts('static/images/contact_top-offical.png','wxid_yangtao','阿涛','群聊','中国 河北','男','杨涛',14,false),
	new Contacts('static/images/contact_top-offical.png','wxid_yangtao','阿涛','群聊','中国 河北','男','杨涛',14,false),
	new Contacts('static/images/find-bg.png','wxid_yangtao','阿涛','群聊','中国 河北','男','杨涛',14,false),
	new Contacts('static/images/find-bg.png','wxid_yangtao','阿涛','群聊','中国 河北','男','杨涛',14,false)


]
	)


 ]
 Group.prototype.getGroup=function(){
 	return new Promise((reslove)=>{
 		reslove(group);
 	})
 }
Group.prototype.getmembers=function(){
	
}
export{Group}