// 下拉框
var list = document.querySelectorAll(".fade1");
var drop = document.querySelector("#dropdown");
var lis = document.querySelectorAll(".nofirst");
var lisb = document.querySelectorAll(".dropright");
list[0].onmouseover = function(){
		drop.style.display = "block";
}
list[0].onmouseout = function(){
		drop.style.display = "none";
}
list[1].onmouseover = function(){
		drop.style.display = "block";
}
list[1].onmouseout = function(){
		drop.style.display = "none";
}
list[3].onmouseover = function(){
		drop.style.display = "block";
}
list[3].onmouseout = function(){
		drop.style.display = "none";
}
drop.onmouseover = function(){
		drop.style.display = "block";
}
drop.onmouseout = function(){
		drop.style.display = "none";
}

for(i = 0;i < lis.length; i++){
	lis[i].index = i;
	if(i%2 != 0){
		lis[i].onmouseover = function(){
			lisb[0].style.display = "block";
			lisb[1].style.display = "none";
		}
	}else{
		lis[i].onmouseover = function(){
			lisb[1].style.display = "block";
			lisb[0].style.display = "none";
		}
	}
	
}