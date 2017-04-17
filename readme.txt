
1、用途 缓加载图片 避免图片不显示 图片地址报错 页面受影响 对图片放大进行处理
2、使用环境 页面有jq img 图片遵循处理设置
3、使用方式
	显示端 
	 <img src='auto.png?默认图片地址尽量使用短路径小文件保证能加载的相应规格的图片图片一开始的默认显示'  dsrc='auto.png?默认图片地址尽量使用短路径小文件保证能加载的相应规格的图片当真实图片加载失败时使用' rsrc="real.pang?真正要显示的图片地址例如用户头像地址用户上传的图片地址并不能保证一定能显示的地址" class=" doerrorimg " " (配置的执行检测处理的类 有些图片无需检测则不用此类可调用时配置)" tobig="1" (当tobig=1时表示 加载大图 )  />
	 
   调用时采用
	$(document).ready(function () {
		var options={ 
			getbigimg:'2', //是否获取大图
			checkbigimg:'2',//是否检测配置大图
			checkimgclass:'doerrorimg',//是否检测配置大图
			getbigimgfunc:'getbigimg'//获取大图地址规则的function 
		 };
		checkallimgload(options);
	
	})
 或者ajax请求完毕append或者html等加载内容后再次调用 checkallimgload(options);
	 
