$(function(){
	$.cookie.json = true;
	$.get("/FN/html/include/header.html", function(data){
		var _user = $.cookie("usename");
		if (_user){
			console.log(111)
			$(data).find(".login_reg").find("a").html("欢迎：<a href='#'>"+ _user +"</a>").end().end()
				   .find(".user_info").find("a").html("<a href='javascript:void(0)' id='logout'>退出登录"+"</a>").end().end()
				   .appendTo(".header");
			$("#logout").click(function(){
//				$.cookie("usename",_user,{expires:-1});
//				console.log(_user)
             $(".login_reg").html("<a href='/飞牛网/html/login.html'>Hi,请登录"+"</a>").end()
				   .find(".user_info").html("<a href='/飞牛网/html/register.html'>免费注册"+"</a>").end()
				   .appendTo(".header");
			})
		} else {
			$(data).appendTo(".header");
		}
		var _amount=0,
		    products=$.cookie("products");
		for(var i=0;i<products.length;i++){
			_amount+=parseInt(products[i].amount)
		}
		$(".cart_amount").text(_amount)
	});

	$.get("/FN/html/include/footer.html", function(data){
		$(data).appendTo(".footer");
	})
});