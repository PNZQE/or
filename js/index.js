document.getElementsByClassName('icon')[0].onclick = function(){
	window.scrollTo(0,0);
}
document.getElementsByClassName('icon')[1].onclick = function(){
	window.scrollTo(0,0);
}

//header的logo大小改变
window.onscroll=function(){
	if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    if(scrollTop>50){
    	document.getElementsByClassName('header_img')[0].style.width='80px';
    }else{
    	document.getElementsByClassName('header_img')[0].style.width='130px';
    }
}			

//回到顶部
var timer = null;
function scrollToTop(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollTop!=0){
		document.body.scrollTop = document.documentElement.scrollTop = scrollTop - 70;
		timer = setTimeout("scrollToTop()",10);
	}else{
		clearTimeout(timer);
		timer = null;
	}
}