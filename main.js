var oDiv = document.getElementById('div1');
var flag = false;
var disX=0;
var disY=0;
oDiv.onmousedown = function(e){
	flag = true;
	disX = e.clientX - oDiv.offsetLeft; 
	disY = e.clientY - oDiv.offsetTop;
}
document.onmousemove = function(e){
	if(flag === true){
		//oDiv.style.left = e.clientX- disX+'px';
		//oDiv.style.top = e.clientY- disY+'px';
		
		var juLeft = e.clientX- disX;
		var juTop = e.clientY- disY;
		if(juLeft<0){
			juLeft = 0;
		}
		if(juLeft > document.documentElement.clientWidth - oDiv.offsetWidth){
			juLeft = document.documentElement.clientWidth - oDiv.offsetWidth
		}
		if(juTop<0){
			juTop = 0;
		}	
		if(juTop > document.documentElement.clientHeight - oDiv.offsetHeight){
			juTop = document.documentElement.clientHeight - oDiv.offsetHeight
		}			
		
		oDiv.style.left = juLeft+'px';
		oDiv.style.top = juTop+'px';		
	}
}

oDiv.onmouseup = function(){
	flag = false
}
