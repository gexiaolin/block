var canvas = document.querySelector('#canvas');
ctx = canvas.getContext('2d');

var sec,min,hour,secs,mins,i = 1;
var clock = function(){
	var time = new Date();
	secs = time.getSeconds();
	mins = time.getMinutes();
	hours = time.getHours();
	sec = Math.PI/30*secs;
	min = Math.PI/1800*(mins*60+secs);
	hour = Math.PI/21600*(hours*3600+mins*60+secs);
	//钟表
	ctx.save();
	ctx.translate(200,200);
	ctx.lineCap = 'round';
	ctx.strokeStyle = '#333';

	//表框
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#2af';
	ctx.arc(0,0,150,0,Math.PI*2);
	ctx.stroke();
	ctx.restore();

	//60分线
	ctx.save();
	for(var i = 0;i < 60;i++){
		ctx.beginPath();
		ctx.rotate(Math.PI/30);
		if((i+1)%5 == 0){
			ctx.lineWidth = 4;
			ctx.moveTo(0,130);
			ctx.lineTo(0,140);
		}else{
			ctx.lineWidth = 2;
			ctx.moveTo(0,135);
			ctx.lineTo(0,140);
		}
		ctx.stroke();
	}
	ctx.restore();

	//时针
	ctx.save();
	ctx.beginPath();
	ctx.rotate(hour);
	ctx.lineWidth = 8;
	ctx.moveTo(0,10);
	ctx.lineTo(0,-70);
	ctx.stroke();
	ctx.restore();

	//分针
	ctx.save();
	ctx.beginPath();
	ctx.rotate(min);
	ctx.lineWidth = 4;
	ctx.moveTo(0,15);
	ctx.lineTo(0,-110);
	ctx.stroke();
	ctx.restore();

	//秒针
	ctx.save();
	ctx.beginPath();
	ctx.rotate(sec);
	ctx.lineWidth = 2;
	ctx.strokeStyle = 'red';
	ctx.moveTo(0,15);
	ctx.lineTo(0,-100);
	ctx.moveTo(5,-105);
	ctx.arc(0,-105,5,0,Math.PI*2);
	ctx.moveTo(0,-110);
	ctx.lineTo(0,-115);
	ctx.stroke();
	ctx.restore();

	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.arc(0,0,2,0,Math.PI*2);
	ctx.fill();
	ctx.restore();

	ctx.restore();
}
clock();
setInterval(function(){
	i++;
	ctx.clearRect(0,0,400,400);
	clock();
},1000);