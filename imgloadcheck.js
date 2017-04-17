
// <!-- 判断是否可用onerror的js  -->
function checkonerror(){
	//checkimg = new Image();
	// <!-- checkimg.src='http://www.yl1001.com/checkcandoerror30.jpg';  -->
	//checkimg.onerror = function () {	
	//	return true;
	//}	
}

function checkimgloadinginfo(obj,url,durl){
var imgloader= new window.Image();
  // <!--  当图片成功加载到浏览器缓存  -->
  imgloader.onload =function(evt)  
  {
   if(typeof(imgloader.readyState)=='undefined')
    {
		imgloader.readyState = 'undefined';
    }
	//obj.attr("readyState",imgloader.readyState);
  // <!-- 在IE8以及以下版本中需要判断readyState而不是complete  -->
  if (((imgloader.readyState=='complete'||imgloader.readyState=="loaded"||imgloader.readyState=="4")||imgloader.complete))	
  { 
    obj.attr("hasload","6");
	obj.attr("src",url);
	if(obj.attr("tobig")=="1"){
		obj.parent().attr("href",obj.attr("rsrc"));
		obj.parent().attr("href","javascript:;");
		obj.attr("href",getbigimg(obj.attr("rsrc")));			
		obj.parent().addClass("showimga11");	
		obj.attr("tobig","2");					
	}
  }else{
    imgloader.onreadystatechange(evt);
  }
};

imgloader.onerror = function(evt)
{
	obj.attr("hasload","0.2");
	obj.attr("src",durl);
	imgloader.onerror = null;
};
                
 imgloader.onreadystatechange = function(e)
 {   // <!-- 在某些坑爹ie文档模式下 readyState会先由Uninitialized或者其它状态变成complete 故需要再次判断  -->
	if(imgloader.readyState=='complete'||imgloader.readyState=="loaded"||imgloader.readyState=="4"){
			obj.attr("hasload","6");
			obj.attr("src",url);
			if(obj.attr("tobig")=="1"){
				obj.parent().attr("href",obj.attr("rsrc"));
				obj.parent().attr("href","javascript:;");
				obj.attr("href",getbigimg(obj.attr("rsrc")));			
				obj.parent().addClass("showimga11");	
				obj.attr("tobig","2");					
			}
	}else{
		obj.attr("hasload","0.3");
		//obj.attr("nowreadyState",imgloader.readyState);
		obj.attr("src",durl);
	}
 };
 imgloader.src=url;

}



function getbigimg(str){
		var reg1=new RegExp("_360_270.","g"); // <!-- 修改提示语句 -->
		var stringObj1=str; 
		var newstr1=stringObj1.replace(reg1,"."); 
		return newstr1;
}

function imgcheck(obj,url,durl){
		checkimgloadinginfo(obj,url,durl);
}
function checkallimgload(){
	$(".doerrorimg").each(function(i){		
					if($(this).attr("hasload")<1 || typeof($(this).attr("hasload"))=="undefined"){
						if(!$(this).attr("rsrc") || typeof($(this).attr("rsrc"))=="undefined"){								
								$(this).attr("hasload","3");
						}else{
							if(imgcheck($(this),$(this).attr("rsrc"),$(this).attr("dsrc"))){									
									$(this).attr("src",$(this).attr("rsrc"));
									if($(this).attr("tobig")=="1"){
										$(this).parent().attr("href","javascript:;");
										$(this).attr("href",getbigimg($(this).attr("rsrc")));
										$(this).attr("tobig","2");									
										$(this).parent().addClass("showimga11");										
									}
									$(this).attr("hasload","1");	
							};	
						}	
					}					
			});
}
