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

function updateValue(key, value){
  if(value < 0){
    value = 0
    console.log("Positive numbers only");
  }
  if(key == 'seconds'){
    if(value < 10){
      // add 0 to values less than 10
      value = "0" + value;
    }
    if(value > 59){
      value = 59;
    }
  }
  // add value to html
  $("#"+ key).html(value || 0);
  timerObj[key] = value;

  
}
// make detectChanges self call
(function detectChanges(key){
  // construct input id
  let input = "#" + key + "-input";

  $(input).change(function (){
    updateValue(key, $(input).val())
  })

  $(input).keyup(function (){
    updateValue(key, $(input).val())
  })
  return arguments.callee;

})("minutes")("seconds");


// Button management

function startTimer(){
  buttonManager(["start", false],["pause", true],["stop", true]);
  freezInputs();
}

function stopTimer(){
  buttonManager(["start", true],["pause", false],["stop", false]);
  unfreezInputs();
}

function pauseTimer(){
  buttonManager(["start", true],["pause", false],["stop", true]);
}

function buttonManager(...btnArray){
  // invertes disabled functionality on buttons
  for(let i = 0; i < btnArray.length; i++){

    let button = "#"+btnArray[i][0] + "-button";

    if(btnArray[i][1]){
      $(button).removeAttr("disabled");
    }else{
      $(button).attr("disabled", "disabled");
    }
  }

}

function freezInputs(){
  $("#minutes-input").attr("disabled", "disabled");
  $("#seconds-input").attr("disabled", "disabled");
}

function unfreezInputs(){
  $("#minutes-input").removeAttr("disabled", "disabled");
  $("#seconds-input").removeAttr("disabled", "disabled");
}