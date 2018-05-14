
// import { Toast } from 'antd-mobile';
/**
 * @desc   描述
 * @date   2018-04-28
 * @author luozhou
 * @param  {[Number]}   px [设计图实际像素大小]
 * @return {[Number]}      [返回一个计算后的大小]
 */
const initWidth = 750;
const currentWidth = window.innerWidth;
export const MathPx = (px)=>{
	return px/(initWidth/currentWidth)
}

/*
 * application/x-www-form-urlencoded 提交方式针对数组参数进行序列化
 * @param key {String}: 当前需要序列化的数组key值
 * @param arr {Array}: 需要进行序列化的数组
 * @return {String}
 */
const formatRequestArray = (key, arr) => {
	let con = '';
	arr.forEach((el) => {
		con += key+'[]='+el+'&';
	});
	return con;
}

/*
 * 针对 application/x-www-form-urlencoded 对提交数据进行序列化
 * @param json {Object}: 需要进行序列化的 json
 * @return {String}
 */
const formatRequestParam = (json)=>{
	let con = '';
	for( let key in json ) {
		const val = json[key];
		const type  = typeof val;
		
		if( /string|number/.test(type) ) {
			con += encodeURIComponent(key)+'='+encodeURIComponent(val)+'&';
		} else if( val instanceof Array ) {
			con += formatRequestArray(key, val);
		}
	}
	return con.substring(0, con.length - 1);
}
/**
 * @desc   描述
 * @date   2018-04-28
 * @author luozhou
 * @param  {[String]}   url     [请求路径]
 * @param  {[Object]}   params  [请求类型]
 * @param  {[Boolean]}  completeData  [是否返回完整数据]
 * @param  {[Function]} resolve [成功回调函数]
 */
const post = (url,params,resolve,completeData)=>{
	let data = Object.keys(params).length ? params : {};
	fetch(url,{
	    type:'post',
	    method:'post',
	    credentials: "include",
	    body:formatRequestParam(data),
	    headers:{
	        'Accept': 'application/x-www-form-urlencoded',
	        'Content-Type': 'application/x-www-form-urlencoded',
	    }
	}).then((response)=>{
	    if( !response.ok ) console.log('请求失败');
	    return response.json();
	}).then((json)=>{
		if(json.code==200 && !completeData){
	    	resolve(json.data)
		}else{
			resolve(json)
		}
	}).catch((ex)=>{
	    console.trace(ex);
	})	
}
/**
 * @desc   描述
 * @date   2018-04-28
 * @author luozhou
 * @param  {[String]}   url     [请求路径]
 * @param  {[Boolean]}  completeData  [是否返回完整数据]
 * @param  {[Function]} resolve [成功回调函数]
 */
const get = (url,resolve,completeData)=>{
	fetch(url,{
		type:'get',
	    credentials: "include",
		method:'get'
	}).then((response)=>{
		if( !response.ok ) console.log('请求失败');
		return response.json();
	}).then((json)=>{
		if(json.code==200 && !completeData){
			resolve(json.data)
		}else{
			resolve(json)
		}
	}).catch((ex)=>{
		console.trace(ex);
	})
}
/**
 * @desc   描述
 * @date   2018-04-28
 * @author luozhou
 * @param  {[String]}   url     [请求路径]
 * @param  {[Object]}   params  [请求类型]
 * @param  {[Boolean]}  completeData  [是否返回完整数据]
 * @param  {[Function]} resolve [成功回调函数]
 */
const file = (url,params,resolve,completeData)=>{
	let body = Object.keys(params).length ? params : {};
	fetch(url,{
	    type:'file',
	    credentials: "include",
	    method:'post',
	    body
	}).then((response)=>{
	    if( !response.ok ) console.log('请求失败');
	    return response.json();
	}).then((json)=>{
	    if(json.code==200 && !completeData){
	    	resolve(json.data)
		}else{
			resolve(json)
		}
	}).catch((ex)=>{
	    console.trace(ex);
	})	
}

export const Ajax = {
	post,
	get,
	file
}


// 设置全局变量
export let GLOBAL={
	menu:[]
}
export const setMenu = data =>{
	GLOBAL.menu = data;
}

