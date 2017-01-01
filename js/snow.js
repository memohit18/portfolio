
var myImage=document.getElementById("img");

var imageArray=["building.jpg","dog.jpg","cat.jpg","sea.jpg"];

var imageIndex=0;

function ChangeImage(){
	img.attribute("src",imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex>=imageArray.length){
		imageIndex=0;}
     }
	 
var intervalHandle=setInterval(ChangeImage,2000);

img.onClick=function(){
	clearInterval(intervalHandle);}
	