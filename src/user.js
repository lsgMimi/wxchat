function Contacts(img,wxNumber,nickname,source,area,sex,remark,id,isTalk,msg,isAdd){
	this.img=img;
	this.nickname=nickname;
	this.wxNumber=wxNumber;
	this.sex=sex;
	this.area=area;
	this.remark=remark;
	this.id=id;
	this.source=source;
	this.isTalk=isTalk;
	this.msg=msg;
	this.isAdd=isAdd;
}
function Talkmsg(time,person,content,isRead){
	this.time=time||new Date().getTime();
	this.person=person;
	this.content=content;
	this.isRead=isRead
}
let Content=[
new Talkmsg('1490507178837','大东','你在干什么呀？',true),
new Talkmsg('1490507178980','大东','吃饭了么？',false)
]
let Content2=[
new Talkmsg('1490507179037','迷糊小姐','你在干什么呀？',true),
new Talkmsg('1490507179980','迷糊小姐','要一起出去爬山吗？',false)
]
let Content3=[

new Talkmsg('1490507179980','阿涛','why?',false)
]
let Contact=[
new Contacts('//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg','qiaoyu','miss','群聊','中国 河北','女','A',10,false,'',true),
	new Contacts('static/images/find-bg.png','ll1323','大东','群聊','英国 伦敦','男','',11,true,Content,true),
	new Contacts('static/images/me_more-expression.png','miss_white','迷糊小姐','群聊','德国 柏林','女','',15,true,Content2,true),
	new Contacts('//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg','dreamlist','王小胖','通过分享名片','中国 陕西','女','B',12,false,'',true),
	new Contacts('//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg','qiaoyu','miss','群聊','中国 河北','女','A',13,false,'',true),
	new Contacts('//images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg','wxid_yangtao','阿涛','群聊','中国 河北','男','杨涛',14,true,Content3,true),
	new Contacts('//images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg','mmm_12142','da涛','群聊','中国 河北','女','M',14,false,'',false),
		new Contacts('//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg','heiei小胖','zhuli胖','通过搜索微信号','中国 陕西','女','微微',12,false,'',false),
]
Contacts.prototype.getContact = function() {
	return new Promise((resolve)=>{
		resolve(Contact);
	})
}
Contacts.prototype.getContacts=function(id){
return this.getContact().then((contact)=>{
	contact.filter((val)=>{
		if(val.id===id){
			return val;
		}
	})
})
}

export {Contacts,Talkmsg,Contact};