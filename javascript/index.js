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
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  minDec.innerText = chronometer.splitClick()[0]
  minUni.innerText = chronometer.splitClick()[1]
}

function printSeconds() {
  secDec.innerText = chronometer.splitClick()[3]
  secUni.innerText = chronometer.splitClick()[4]
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerText = chronometer.splitClick()[6]
  milUni.innerText = chronometer.splitClick()[7]
}

function printSplit () {
  const li = document.createElement("li")
  const timePrint = document.createTextNode(chronometer.splitClick())
  li.appendChild(timePrint)
  splits.appendChild(li)
}

function clearSplits() {
  splits.innerHTML = ""
}

function setStopBtn() {
  btnLeft.innerText = 'STOP'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT'
  btnRight.className = 'btn split'
}

function setStartBtn() {
  btnLeft.innerText = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  btnRight.innerText = 'RESET'
  btnRight.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  
  if (btnLeft.innerText === 'START') {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick(printTime)
  } else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
})

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'RESET') {
    chronometer.resetClick()
    printTime()
    clearSplits()
  } else {
    printSplit()
  }
})
