define(['jquery','template'],function($,template){
	$.ajax({
		type:"get",
		url:"/api/teacher",
//		async:true,
		dataType:'JSON',
		success:function(data){
//			console.log(data);
			//解析数据并渲染页面
			var html = template('teacherTpl',{list:data.result});
			console.log(html);
			$('#teacherInfo').html(html);
		}
	});
});
