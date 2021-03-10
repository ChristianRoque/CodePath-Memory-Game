// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var lives = 0;
// Variables used for timer
var time = 10; // amount of time given to user
var timerVar; // where i will save my timer function

// Game logic

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  // health
  health(-3);
  // Empty the array in case this is a second round
  pattern = [];
  // populate array with random numbers
  populateArray(8);
  // start playing the sequence
  playClueSequence();
}

// Generate a random sequence
function populateArray(num) {
  let randomNum = 0;
  for (let i = 0; i <= num; i++) {
    while (randomNum == 0) {
      randomNum = Math.floor(Math.random() * Math.floor(7));
    }

    pattern.push(randomNum);
    randomNum = 0;
  }
  console.log("the array is " + pattern.join(" | "));
}

function stopGame() {
  // end game
  // stop timer when game is over
  stopTimer();
  // reset health
  health(0, true);
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  startTimer();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// Handling win lose game event

function loseGame() {
  stopTimer();
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  stopTimer();
  alert("Game Over. You won.");
}

// Timer

function timer() {
  if (time >= 0) {
    document.getElementById("timer").innerHTML = time + " seconds remaining.";
    time -= 1;
  } else {
    document.getElementById("timer").innerHTML = "";
  }
}

function stopTimer() {
  clearInterval(timerVar);
  time = 10;
  document.getElementById("timer").innerHTML = "";
}

function startTimer() {
  timerVar = setInterval(timer, 1000);
}

// health

function health(num, over = false) {
  lives -= num;

  // created this parameter to handle ending the game before all lives
  // are exhausted if you press stop
  if (over) {
    lives = 0;
    document.getElementById("health").innerHTML = "";
  }
  
  if (lives == 0 && !over) {
    document.getElementById("health").innerHTML = "";
  } else if (lives != 0 ) {
    document.getElementById("health").innerHTML = lives + " remaining .";
  }
}

// Keep track of user guess

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn == pattern[guessCounter]) {
    if (guessCounter != progress) {
      console.log("you are right, but you still missing one key");
      guessCounter += 1;
    } else {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        console.log("Game is still not over!");
        stopTimer();
        clueHoldTime -= 150;
        progress += 1;
        guessCounter = 0;
        playClueSequence();
      }
    }
  } else {
    health(1);
    lives == 0 ? loseGame() : null;
  }
}

// Sound Synthesis Functions -----------------------------------------

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 522,
  6: 600
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
