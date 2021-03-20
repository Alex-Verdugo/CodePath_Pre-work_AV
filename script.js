Math.random

// global constants
//I changed constants to vars to be mutated
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var wrongBtn = 0;

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 300,
  3: 400,
  4: 500,
  5: 600
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// populates pattern with random numbers 
function randomizePattern(size){
  
  for(var i = 0;i<=size;i++){
    
      pattern[i]= Math.floor((Math.random() * (5) + 1));
     
 }
  console.log("Random pattern created: " + pattern)
  return pattern;

}


function hardMode(){
  console.log("User Selected Hard Mode")
  randomizePattern(22);
  clueHoldTime = 600; //how long to hold each clue's light/sound
  cluePauseTime = 50; //how long to pause in between clues
  nextClueWaitTime = 200; //how long to wait before starting playback of the clue sequence
  startGame();
}

function easyMode(){
  randomizePattern(11);
  startGame();
}


function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
    
}



function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("hardBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  // reseting the values changed in hardMode function
  clueHoldTime = 1000; //how long to hold each clue's light/sound
  cluePauseTime = 333; //how long to pause in between clues
  nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
  wrongBtn=0;
  /*
  This is my first time writing any of these languages and
  creating a website, I am not familar with how
  the program runs, usually it is easy to understand 
  when you click run, I know program restarts and 
  variables changes by methods are reset, so I am updating these 
  values here but I dont think this is the most efficent way. 
  */

  
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost. :(");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won! :)");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
console.log("miss counter value: " + wrongBtn);
if(wrongBtn<2){
  if(pattern[guessCounter] == btn){//if button was correct
    if(guessCounter == progress){// if 
      if(progress == pattern.length - 1){
        winGame();
      }
      
      else{
        progress++;
        console.log("Current Progress: " + progress);
        playClueSequence();
      }
      
    }else{
      guessCounter++;
      console.log("Current Guesses: " + guessCounter);
    }
  }else{
    wrongBtn++;
    alert("Wrong Button Try Again");
    console.log("Current Misses: " + wrongBtn);
    console.log("Current Progress: " + progress);
    playClueSequence();
  }
}
  else{
    loseGame();
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime-=15;
  }
  
}


  