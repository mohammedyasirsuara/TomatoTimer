var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

var seconds;
var minutes;
var mode;

function startTimer() {
  interval=setInterval(function(){
    countDown();
    if(totalSeconds<=0){
      alert("Time for a break!");
      clearInterval(interval);
    }
  },1000)
}
function reset(){
  totalSeconds = Math.floor(workMinutesInput.value*60);
  convertTime(totalSeconds);
}

function convertTime(time){
  minutes = Math.floor(time/60);
  seconds = Math.floor(time%60);
  minutesDisplay.textContent = minutes;
  secondsDisplay.textContent = seconds;
}

function countDown(){
  minutesDisplay.textContent = minutes;
  secondsDisplay.textContent = seconds;
  seconds--;
  if(seconds===-1){
    minutes-=1;
    seconds=59;
  }
  totalSeconds--;
}

reset();
playButton.addEventListener("click", startTimer);

pauseButton.addEventListener('click', function(){
  clearInterval(interval);
})

stopButton.addEventListener('click', function(){
  clearInterval(interval);
  reset();
})

statusToggle.addEventListener('click', function(){
  if(statusSpan)
})