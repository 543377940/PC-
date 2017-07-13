define(["jquery", "cookie"], function($){
	$.cookie.json = true;
	$.get("/html/include/header.html", function(data){
		var _user = $.cookie("usename");
		if (_user){
			$(data).filter(".login_reg").hide().end()
				   .filter(".user_info").show().html("欢迎：<a href='#'>"+ _user.usename +"</a>").end()
				   .appendTo(".u1");
		} else {
			$(data).appendTo(".header");
		}
	});

	$.get("/html/include/footer.html", function(data){
		$(data).appendTo(".footer");
	})
});