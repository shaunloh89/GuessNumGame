var startButton = document.querySelector('button.start')
var matchButton = document.querySelector('button.match')
var body = document.querySelector('body')
var label = document.querySelector('h1')
var colorTrigger
var labelTrigger
var backgroundArr
var labelArr
var score = 0

function changeColor () {
  body.style.backgroundColor = backgroundChanger()
}

function changeLabel () {
  //body.style.background = labelChanger
  label.innerHTML = labelChanger()
}

function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function backgroundChanger () {
  backgroundArr = ['red', 'yellow', 'blue', 'purple']
  return backgroundArr[randomFn (0, 3)]
}

function labelChanger () {
  labelArr = ['red', 'yellow', 'blue', 'purple']
  return labelArr[randomFn (0, 3)]
}

function stopGame () {
  clearInterval(colorTrigger)
  clearInterval(labelTrigger)
  label.innerHTML = 'Game Over. Your score is ' + score
}

// function colorChanger () {
//   var r = randomFn(0, 255)
//   var g = randomFn(0, 255)
//   var b = randomFn(0, 255)
//   var o = Math.random()
//
//   // rgba(5, 38, 96, 1)
//   return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + o + ')'
// }

// starts the game
startButton.addEventListener('click', function () {
  // setTimeout(afterTimeout, 5000)
  colorTrigger = setInterval(changeColor, 1000)
  labelTrigger = setInterval(changeLabel, 1000)
  setTimeout(stopGame, 10000)
})

matchButton.addEventListener ('click', function () {
  if (backgroundArr === labelArr) {
    score += 1
  }
})

//change background color
//change word
//if word = background color
