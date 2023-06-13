// Created on iPhone.
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


var autocount = 0;

var imgs = [
	"image.jpg",
	"image1.jpg",
	"image2.jpg",
	"image3.jpg"
]

function newSkillIssue(){
    // Create a new image element
	var img = document.createElement('img');
	// Set the source of the image
	img.src = imgs.random();
	// Append the image to the body of the document
	document.body.appendChild(img);
	img.addEventListener("click",newSkillIssue)
	var tw = window.innerWidth-img.width
	var th = window.innerHeight-img.height
	var x = tw*Math.random();
	var y = th*Math.random();
	var vx = (Math.random()*1000)%7;
	var vy = (Math.random()*1000)%7;
	vx-=3;
	vy-=3;
	vx*=5;
	vy*=5;
	setInterval(()=>{
		img.style.top = y+"px";
		img.style.left = x+"px"
		x+=vx
		y+=vy
		if(x<0&&vx<0)vx*=-1;
		if(y<0&&vy<0)vy*=-1;
		var ww = window.innerWidth
		var wh = window.innerHeight
		var iw = img.width
		var ih = img.height
		if(x+iw>ww&&vx>0)vx*=-1
		if(y+ih>wh&&vy>0)vy*=-1
	}, 16)
	setTimeout(()=>{
		if(autocount>4)return;
		autocount++
		newSkillIssue()
	}, Math.round(1000+(Math.random()*3000)))
}

newSkillIssue()