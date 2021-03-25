// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var numMistakes = 0;
var currentTime = 10;
var countdownTimer;
var numLevels = 8;

function getRandomInt(min, max) {
  // Gets random integer between "min" (int) and "max" (int)
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generatePattern(num) {
  // Generates a list of "num" random numbers between 1 and 7.
  // Used for pattern setting
  pattern = [];
  for (let i = 0; i < num; i++) {
    // Get a random integer num times, and append them to the list
    pattern.push(getRandomInt(1, 7));
  }
  console.log(pattern);
  return pattern;
}

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  numMistakes = 0;

  // generate the pattern
  pattern = generatePattern(numLevels);

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  // remove difficulty setter
  document.getElementById("difficultySetter").classList.add("hidden");

  // add Level Notification
  document.getElementById("levelCount").classList.remove("hidden");

  // play clues
  playClueSequence();
}

function stopGame() {
  // stop game
  gamePlaying = false;

  // stop countdown timer
  document.getElementById("timer").classList.add("hidden");
  clearInterval(countdownTimer);

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

  // enable difficulty measure
  document.getElementById("difficultySetter").classList.remove("hidden");

  // Remove Level Count
  document.getElementById("levelCount").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 211.6,
  2: 279.6,
  3: 342,
  4: 416,
  5: 484.3,
  6: 552.8
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

function changeDifficulty(x) {
  numLevels = numLevels + x;
  if (numLevels === 0) {
    numLevels++;
  }
  console.log("difficulty:", numLevels);
  document.getElementById("difficulty").innerHTML = "Difficulty: " + numLevels;
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
  document.getElementById("levelCount").innerHTML = "Level " + (progress + 1);
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  console.log("clue sequence is playing.");
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  
  // we don't want clueHoldTime to be too small or negative
  clueHoldTime -= 35;
  if (clueHoldTime < 300) { 
    clueHoldTime = 300;
  }
  setTimeout(startTimer, delay, progress + 5);
}

function startTimer(currentTime) {
  if (gamePlaying) {
    console.log("Timer starting");
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("timer").innerHTML = "Time left: " + currentTime;
    countdownTimer = setInterval(function() {
      currentTime--;
      document.getElementById("timer").innerHTML = "Time left: " + currentTime;
      if (currentTime <= 0) {
        console.log("Lost. Didn't guess in time.");
        clearInterval(countdownTimer);
        loseGame();
      }
    }, 1000);
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn != pattern[guessCounter]) {
    // guess is not correct
    numMistakes++;
    console.log("Made a mistake:", numMistakes, "mistakes");
    // Three strikes, you're out
    if (numMistakes == 3) {
      loseGame();
    } else {
      alert("Made a mistake. Try again.");
    }
  } else if (guessCounter < progress) {
    // turn is not over
    guessCounter++; // next guess in the level
  } else if (progress < pattern.length - 1) {
    // not the last turn
    console.log("Next level!");
    clearInterval(countdownTimer);
    progress++; // next level
    document.getElementById("timer").classList.add("hidden");
    playClueSequence();
  } else {
    // it's the last term; win
    winGame();
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}
