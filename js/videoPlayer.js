//refs:
const container = document.querySelector(".video__container");

const player = document.querySelector(".player");
const video = player.querySelector(".player__video");

const poster = player.querySelector(".player__poster");

const progressBtnToggle = player.querySelector(".togle");
const bigBtnPlay = player.querySelector(".video__big-btn-play");

const progressRange = player.querySelector(".progress-range");
const volumeRange = player.querySelector(".volume-range");

const volumeBtnTogle = player.querySelector(".volume-togle");

const currentTime = player.querySelector(".current-time");
const durationVideo = player.querySelector(".duration-time");

//flags:
let volumeOn = true;

//media query from js:
// Create a condition that targets viewports at max-width 768px wide
const mediaQuery = window.matchMedia("(max-width: 768px)");
function handleTabletChange(e) {
  e.matches && container.classList.remove("container");
  !e.matches && container.classList.add("container");
}
// Register event listener
mediaQuery.addEventListener("change", handleTabletChange);
// Initial check
handleTabletChange(mediaQuery);

//Show time duration:
function createView() {
  currentTime.innerHTML = `0:00`;
  durationVideo.innerHTML = `0:${parseInt(video.duration)}`;
}

//Togle play foo:
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
  if (method === "play") {
    poster.classList.add("hidden");
  }
}

function toggleBtnsVue() {
  //small btn:
  const iconEl = progressBtnToggle.querySelector(".player__btn--use");
  const iconValue = this.paused ? "play-btn" : "pause-btn";
  iconEl.href.baseVal = `./assets/svg/sprite.svg#${iconValue}`;

  //large btn:
  bigBtnPlay.classList.toggle("hidden");
}

//Progress update foo:
function changeRangeStyle(range) {
  range.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${range.value}%, #C4C4C4 ${range.value}%, #C4C4C4 100%)`;
}

function autoUpdateProgress() {
  progressRange.value = (100 * this.currentTime) / this.duration;
  changeRangeStyle(progressRange);
  const time = String(parseInt(video.currentTime));
  if (time.length === 1) {
    currentTime.innerHTML = `0:0${time}`;
  } else if (time.length === 2) {
    currentTime.innerHTML = `0:${time}`;
  }
}

function videoHandleRewind(e) {
  //progressRange.offsetWidth - width of range in px
  // e.offset where we clicked in range
  this.value = (100 * e.offsetX) / this.offsetWidth;

  video.pause();
  const scrubTime = (e.offsetX / progressRange.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  video.play();
}

//Volume update foo

function toggleVolumeVue() {
  const iconEl = volumeBtnTogle.querySelector(".player__volume--use");
  const iconValue = volumeOn ? "on" : "off";
  iconEl.href.baseVal = `./assets/svg/sprite.svg#volume-${iconValue}`;
}

function volumeHandleChange() {
  //this.value it is value of input.range  //volume in video is regulated in %, so:
  video.volume = this.value / 100;
  changeRangeStyle(volumeRange);
  if (video.volume === 0) {
    volumeOn = false;
    toggleVolumeVue();
  } else if (video.volume > 0) {
    volumeOn = true;
    toggleVolumeVue();
  }
}

function volumeHandleVueToggle() {
  volumeOn = !volumeOn;
  toggleVolumeVue();

  if (!volumeOn) {
    video.volume = 0;
  } else {
    video.volume = volumeRange.value / 100;
  }
}

//====================================
window.addEventListener("load", createView);

video.addEventListener("click", togglePlay);
bigBtnPlay.addEventListener("click", togglePlay);
progressBtnToggle.addEventListener("click", togglePlay);

video.addEventListener("play", toggleBtnsVue);
video.addEventListener("pause", toggleBtnsVue);

video.addEventListener("timeupdate", autoUpdateProgress);

progressRange.addEventListener("click", videoHandleRewind);
progressRange.addEventListener("input", () => changeRangeStyle(progressRange));

volumeRange.addEventListener("input", volumeHandleChange);
volumeBtnTogle.addEventListener("click", volumeHandleVueToggle);
