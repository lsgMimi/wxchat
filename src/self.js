import {Contacts} from './user.js'

let msgss=[
{'time':'1490507178837','toperson':'大东','con':'wait a minute'},
{'time':'1490507178837','toperson':'阿涛','con':'好的好的'},
{'time':'1490507178837','toperson':'迷糊小姐','con':'说话算话'}
]
function Self(img,wxNumber,nickname,area,sex,msg,codeImg,password){
	this.img=img||'static/images/me_more-expression.png';
	this.nickname=nickname||'大白白';
	this.wxNumber=wxNumber||'hhh_dabaisha';
	this.sex=sex||'女';
	this.area=area||'德国 柏林';
	this.msg=msg||msgss;
	this.codeImg=codeImg||'static/images/chat-info-qr.png';
	this.password=password||'admin'
}
Self.prototype.getmsg=function(){
	return new Promise((resolve)=>{
		return resolve(this.msg);
	})
}
export{Self,msgss}