        $(function(){
		// 加载列表商品数据，渲染模板显示
//		$.cookie("usename",{usename:123,
//		                     exprise:7});
         $("#all").mouseenter(function(){
			$("#allpro li").mouseenter(function(){
				$(this).addClass("xx").find("a,i").addClass("yy").end().parent().parent()
				       .find(".allsubnav").show().find(".alldiv").eq($(this).index()).show()
				       .siblings().hide()
			})
			$("#allpro li").mouseleave(function(){
				$(this).removeClass("xx").find("a,i").removeClass("yy")
			})
			    })
	    $("#all").mouseleave(function(){
	    	$(".allsubnav").hide();
	    })
		$.getJSON("/飞牛网/mock/list.json", function(responseData){
			var data = {
				list : responseData
			};
			console.log(data)
			var html = template("list_temp", data);
			$(html).appendTo(".main");
		});
			$(window).on("load", function(){
			   var $lis=$("li",$("#wrap")),
			    current=0,
			    next=1,
			    $dds=$("span",$("#pages"));
			    $dds.eq(0).addClass("on")
			    $("#wrap").hover(function(){
			    	clearInterval(timer);
			    	$("#zuo").show();
			    	$("#you").show();
			    },function(){
			    	timer = setInterval(move, 3000);
			    	$("#zuo").hide();
			    	$("#you").hide();
			    }).trigger("mouseleave");
			    
			    for(var i=0;i<$dds.length;i++){
		    	    //$dds.eq(i).index()=i;
			    	$dds.eq(i).click(function(){			    		
			    			next=$(this).index();
			    			console.log($(this).index())
			    			move();			    		
			    	})
			    }
			    $("#you").click(move);
			    $("#zuo").click(function(){
			    	next=current-1;
			    	if(current==0)
			    	next=7;
			    	move();
			    })
			    function move(){
			    	$lis.eq(current).fadeOut(1000)
			    	//fadeOut(lis[current],1000);
			    	$lis.eq(next).fadeIn(1000)
			    	//fadeIn(lis[next],1000);
			    	$dds.eq(current).removeClass("on")
			    	//removeClass(dds[current],"on");
			    	$dds.eq(next).addClass("on")
			    	//addClass(dds[next],"on");
			    	current=next;
			    	next++;
			    	if(next==8)
			    	next=0;
			    	}
			   

			    var headerHeight = $(".main").offset().top, // div.header 的布局结构的高度
				winHeight = $(window).height(), // window 高度
			    isWheel = true, // 标识通过鼠标滚轮还是点击实现的滚动
				currIndex = 0; // 当前显示楼层索引
			    $(window).on("scroll",function(){
			    	if (!isWheel)
					return;
				// 获取垂直滚动距离
				   var _scrollTop = $(window).scrollTop();
				// 判断，导航显隐
				   if (_scrollTop > headerHeight - winHeight / 2) {
					// $(".nav").stop().show(10000);
					$("#floor").stop().fadeIn();
				   } else {
					// $(".nav").stop().hide(10000);
					$("#floor").stop().fadeOut();
				  }
				   $(".con").each(function(index, element){
					// 获取当前遍历到楼层之前布局结构的高度
					var _top = $(this).offset().top;
					// 判断是否切换导航样式
					if (_scrollTop > _top - winHeight / 2){
						currIndex = index;
						$("#floor li").eq(index)
									.children("span").show().end()
									.siblings()
									.children("span").hide();
					}
					});
					$("#floor").on("click", "li", function(){
					isWheel = false;
					// 获取当前点击的 li 的索引
					var index = currIndex = $(this).index();
					/* 对应跳转到 index 索引的楼层上 */
					// 求解 index 索引处楼层之前布局结构高度
					var _top = $(".con").eq(index).offset().top;
					// 将当前点击 li 中的 span 显示
					$(this).find("span").show().removeClass("zz").end()
						   .siblings().find("span").hide();
					// 动画效果
					$("html,body").stop().animate({scrollTop : _top}, 1000, function(){
						isWheel = true;
					});
				  });
	
				$("#floor li").hover(function(){
					$(this).find("span").show().addClass("zz");
				}, function(){
					if ($(this).index() == currIndex){
						$(this).find("span").removeClass("zz")
						return;
					}
						
					$(this).find("span").removeClass("zz").hide();
				});
			    	
                 $(".ul_0>li").mouseenter(function(){
                 	$(this).addClass("chose")
                 	       .siblings().removeClass("chose");
			    	var index=$(this).index();
			    	var floor=$(this).parent().parent().parent().index();
			    	$(".right>div",$(".con").eq(floor)).eq(index).show()
			    	               .siblings().hide()
                 })
                 $("#right a").hover(function(){
                 	$(this).addClass("ww")
                 	.find(".iconpic").css("background","#C70034").end()
                 	.find(".hside").stop().show().css("background","#C70034").animate({left:-120},500)
                 },function(){
                 	$(this).removeClass("ww")
                 	.find(".iconpic").css("background","black").end()
                 	.find(".hside").stop().css("background","black").animate({left:0},200)
                 })
                 $("#return").click(function(){
                 	isWheel = false;
                 	$("body,html").stop().animate({scrollTop:0},1000,function(){
                 	isWheel = true;	
                 	})
                 })
                 var $cx=$(window).scrollTop()
			    	if($cx>=800){
			    	$("#top").show();
			    	$("#right").show()
			       }
			    	else{
			    	$("#top").hide();
			    	$("#right").hide()
			    	}
			    	
			    })
			    
			});
		});