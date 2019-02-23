/**
 * 集合类
 */
var Base={};

/**
 * 判断两个数组是否相待
 * @param {*} arr1 
 * @param {*} arr2 
 */
Base.arrayEqual=function (arr1,arr2){
    if(arr1===arr2) return true;
    if(arr1.length!=arr2.length) return false;
    for(var i=0;i<arr1.length;++i){
      if(arr1[i]!==arr2[i]) return false;
      return true;
    }
}

/**
 * 判断元素是否有某个class
 * @param {*} ele 
 * @param {*} cls 
 */
Base.hasClass=function(ele,cls){
  reutrn /'(\s|^)'+cls+'\s|$'/g.test(ele.className);
}

/**
 * 为元素添加clas
 * @param {*} ele 
 * @param {*} cls 
 */
Base.addClass=function(ele,cls){
  if(!this.hasClass(ele,cls)){
    ele.className+=' '+cls;
  }
}

/**
 * 为元素删除class
 * @param {*} ele 
 * @param {*} cls 
 */
Base.removeClass=function(ele,cls){
  if(this.hasClass(ele,cls)){
    var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg, ' ');
  }
}

/**
 * 获取cookie
 * @param {*} name 
 */
Base.getCookie=function(name){
  var arr=document.cookie.replace(/\s/g,'').split(';');
 for(var i=0;i<arr.length;i++){
   var tempArr=arr[i].split('=');
   if(tempArr[0]==name){
     return decodeURIComponent(tempArr[1]);
   }
 }
 return '';
};

/**
 * 设置Cookie
 * @param {*} name 
 * @param {*} value 
 * @param {*} day 
 */
Base.setCookie=function(name,value,days){
  var date=new Date();
  date.setDate(date.getDate()+days);
  document.cookie=name+'='+value+';expires='+date;
}

/**
 * 根据name删除cookie
 * @param {*} name 
 */
Base.removeCookie=function(name){
  this.setCookie(name,'1',-1);
},
/**
 * 获取浏览器类型和版本
 * @returns {String}
 */
Base.getExplore=function(){
  var sys={},
        ua=navigator.userAgent.toLocaleLowerCase(),
        s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
        (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) return ('IE: ' + sys.ie);
    if (sys.edge) return ('EDGE: ' + sys.edge);
    if (sys.firefox) return ('Firefox: ' + sys.firefox);
    if (sys.chrome) return ('Chrome: ' + sys.chrome);
    if (sys.opera) return ('Opera: ' + sys.opera);
    if (sys.safari) return ('Safari: ' + sys.safari);
    return 'Unkonwn';
};

/**
 * 获取操作系统类型
 */
Base.getOS=function(){
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

    if (/mac/i.test(appVersion)) return 'MacOSX'
    if (/win/i.test(appVersion)) return 'windows'
    if (/linux/i.test(appVersion)) return 'linux'
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'
    if (/android/i.test(userAgent)) return 'android'
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
};

/**
 * 生成指定范围随机数
 * @param {*} min 
 * @param {*} max 
 */
Base.randomNum=function(min,max){
    return Math.floor(min+Math.random()*(max-min));
};

/**
 * 判断obj是否为空
 * @param {*} obj 
 */
Base.isEmtyObject=function(obj){
  if(!obj||typeof obj!=='object' || Array.isArray(obj)) return false;
  return !Object.keys(obj).length;
};

/**
 * url参数转对象
 * @param {*} url 
 */
Base.parseQueryString=function(url){
  url=url==null?window.location.href:url;
  var search=url.substring(url.lastIndexOf('?')+1);
  if(!search){
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}