var video = document.getElementById('player1');
var volSlider = document.getElementById('slider');
var volume = document.getElementById('volume');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.loop = false;
	video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = volSlider.value + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate * .9);
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate * 1.1);
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime+10 >= video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = (video.currentTime+10);
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(this.innerHTML == "Mute"){
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		this.innerHTML = "Mute";
	}
});

document.querySelector('#slider').addEventListener("click", function(){
	video.volume = volSlider.value/100;
	volume.innerHTML = volSlider.value + '%';
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});

