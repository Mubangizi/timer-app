let timerObj = {
  minutes: 0,
  seconds: 0,
  timerId: 0,
}

function soundAlarm(){
  // amount regulates how many times audio should play
  let amount = 3;
  let audio =new Audio("Ding-ding-sound.mp3");
  function playSound(){
    audio.pause();
    audio.currentTime = 0;
    audio.play()
  }

  for(let i = 0; i < amount; i++){
    setTimeout(playSound, 1200 * i);
  }
}