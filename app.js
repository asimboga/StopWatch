const stopWatch = document.querySelector(".stopWatch");
const playBtn = document.querySelector(".playBtn");

const stopBtn = document.querySelector(".stopBtn");

const btns = document.querySelector(".btns");
console.log(stopWatch, playBtn, stopBtn);

let min = 0;
let sec = 0;
let mSec = 0;
let isRunnig = false;
let timer;

const stopWatchTimer = () => {
  mSec++;
  if (mSec == 100) {
    sec++;
    mSec = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }

  min = String(min).length < 2 ? "0" + min : min;
  sec = String(sec).length < 2 ? "0" + sec : sec;
  mSec = String(mSec).length < 2 ? "0" + mSec : mSec;
  stopWatch.innerHTML = ` ${min}: ${sec}: ${mSec} `;
};

playBtn.addEventListener("click", () => {
  isRunnig = !isRunnig;
  console.log(isRunnig);

  if (isRunnig) {
    timer = setInterval(stopWatchTimer, 10);
    playBtn.innerHTML = `<i id="yellow" class="fa-solid fa-circle-pause" ></i>` ;
  } else {
    clearInterval(timer);
    playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
  }
});

stopBtn.addEventListener("click", () => {
  min = 0;
  sec = 0;
  mSec = 0;
  clearInterval(timer);
  stopWatch.innerHTML = `0${min}: 0${sec}:0${mSec}`;
  playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
  isRunnig = false;
});