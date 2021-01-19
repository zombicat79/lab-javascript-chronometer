const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let minutesLeft = minutes[0];
  let minutesRight = minutes[1];
  minUni.textContent = minutesRight;
  minDec.textContent = minutesLeft;
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let secondLeft = seconds[0];
  let secondRight = seconds[1];
  secUni.textContent = secondRight;
  secDec.textContent = secondLeft;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", (event) => {
  if (btnLeft.textContent === "START") {
    btnLeft.className = "btn stop"
    btnLeft.textContent = "STOP";
    btnRight.className= "btn split"
    btnRight.textContent = "SPLIT";
    chronometer.startClick(printTime);
  } else {
    btnLeft.textContent = "START";
    btnLeft.className = "btn start"
    btnRight.className = "btn reset"
    btnRight.textContent = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", (event) => {
  if (btnRight.textContent === "RESET") {
  btnLeft.textContent = "START";
  btnLeft.classList = "btn start"
  minDec.textContent = 0;
  minUni.textContent = 0;
  secUni.textContent = 0;
  secDec.textContent = 0;
  const deleteSplit = [...splits.getElementsByClassName("split-moment")];
  for (let i = 0; i < deleteSplit.length; i++) {
    splits.removeChild(deleteSplit[i]);
  }
  chronometer.resetClick();
 }
  if (btnRight.textContent === "SPLIT") {
    let newLi = document.createElement("li");
    splits.appendChild(newLi);
    newLi.classList.add("split-moment");
    newLi.innerHTML = chronometer.splitClick();
  }
});


