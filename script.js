const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updatePlayIcon = () => {
    if (video.paused) {   
        play.innerHTML = '<i class="bx bx-play-circle bx-sm"></i>'
      } else {
        play.innerHTML = '<i class="bx bx-pause-circle bx-sm"></i>'      }
};

const updateProgress = () => {
    progress.value = (video.currentTime / video.duration ) * 100;


    let min = Math.floor(video.currentTime / 60)
    if(min < 10){
        min = '0' + String(min);
    }


    let sec = Math.floor(video.currentTime % 60)
    if(sec < 10){
        sec = '0' + String(sec);
    }

    timestamp.innerHTML = `${min}:${sec}`;
};


const setVideoProgress = () => {
    video.currentTime = (+progress.value * video.duration) / 100;
};

const stopVideo = () => {
    video.currentTime = 0;
    video.pause();
};
//add events

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
