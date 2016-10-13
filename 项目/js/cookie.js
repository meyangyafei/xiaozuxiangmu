
var CookieUtil = {

	 addCookie : function(key,value,days) {
		 var date = new Date();
		 date.setDate(date.getDate()+days);
		 document.cookie = key+"="+value+";expires="+date.toString();
		 //console.dir(date.toString());
		 console.log("写入cookie"+document.cookie);
	 },
	 getCookie : function(name) {
		 var cookies = document.cookie;
		 var arr = cookies.split(";");
		 for(var i = 0,len=arr.length;i<len;i++) {
			 var  key = arr[i].split("=")[0];
			 var value = arr[i].split("=")[1];
			 if(name==key) {
			 	return value;
		 	 }
	 	 }
	 return null;
	 },
	 deleteCookie : function(name) {
		 var date = new Date();
		 date.setSeconds(date.getSeconds()-1);
		 document.cookie = name+"='';expires="+date.toString();
	 },
	 sumCookie : function(name,newValue,days) {
		 var oldValue = this.getCookie(name);
		 oldValue==null?oldValue=0:oldValue=parseInt(oldValue)
		 oldValue += newValue
		 var date = new  Date();
		 date.setDate(date.getDate()+3);
		 document.cookie = name+"="+oldValue+";expires="+date.toString()+";path='/';";
	 },
	 sumCookie2: function (name,newValue) {
	        var value = this.getCookie2(name);
	        value==null?value=0:value = parseInt(value);
	        value += newValue;
	        document.cookie = name + "="+value;
	    }
 };