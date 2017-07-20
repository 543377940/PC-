window.onload = function(){
    var dleft = document.getElementById('dleft');//获取中图可视区元素
    var big = document.getElementById('img-big');//获取大图显示div元素
    var bigImg = big.getElementsByTagName('img')[0];//大图Img元素
    var proshow = document.getElementById('proshow');//中图div元素
    var midImg = proshow.getElementsByTagName('img')[0];//中图img元素
    var mark = document.getElementById('mark');//遮罩层元素
    var big0 = document.getElementById('big0');

    proshow.onmouseover = function(){
        mark.style.display = "block";
        big.style.display = "block";
    }
    proshow.onmouseout = function(){
        mark.style.display = "none";
        big.style.display = "none";
    }

    proshow.onmousemove = function(e){
        var e = e || window.event;
        var left = e.clientX - dleft.offsetLeft-mark.offsetWidth/2;
        var top = e.clientY - dleft.offsetTop-mark.offsetHeight/2;
        var markOffsetWidth = mark.offsetWidth;
        var midOffsetWidth = this.offsetWidth;
        //判断放大镜遮罩层溢出
        if(left<0){
            left = 0;
        }else if(left > midOffsetWidth - markOffsetWidth){
            left = midOffsetWidth - markOffsetWidth;
        }
        if(top<0){
            top = 0;
        }else if(top > midOffsetWidth - markOffsetWidth){
            top = midOffsetWidth - markOffsetWidth;
        }
        mark.style.left = left+'px';
        mark.style.top = top+'px';
        //计算大图随着遮罩层移动显示的百分比
        persentX = left/(midOffsetWidth - markOffsetWidth);
        persentY = top/(midOffsetWidth - markOffsetWidth);
        big0.style.left = -persentX*big.clientWidth+'px';
        big0.style.top = -persentY*big.clientHeight+'px';
    }
    //获取style样式兼容
    function getCurrentStyle(node) {
        return window.getComputedStyle ? window.getComputedStyle(node,null):node.correntStyle;
    }
}