 var randomNumber = randomFn(0, 10)
 // var guessedNum = prompt('The first guess: type your number!')
 var isCorrect = false
 var gameOver = false

// create a start game button
 var button = document.createElement('button')
 button.innerHTML = 'Start Game'

// append button to <h3>
 var buttonLocation = document.getElementsByTagName('h3')[0]
 buttonLocation.appendChild(button)

// add button event listener
 button.addEventListener('click', startTheGame)

 // fn that generates randomNum
 // min and max always whole number
 // random number between min and max (exclusive)
 function randomFn (min, max) {
   return Math.floor(Math.random() * (max - min)) + min
 }

 // this fn. updates h1 text content
 function updateH1 (newH1) {
   var h1 = document.querySelector('h1')
   h1.textContent = newH1
 }

// fn that checks numbers with the random number
 function askForANumber (guessedNum, randomNumber) {
   if (guessedNum > randomNumber) {
     updateH1('lower, randomNumber is ' + randomNumber)
   } else if (guessedNum < randomNumber) {
     updateH1('higher, randomNumber is ' + randomNumber)
   } else if (guessedNum === randomNumber) {
     updateH1('correct')
     gameOver = true
   }
   checkForGameover()
 }

 function newGame () {
  // setting randomNumber to 5 for easy checking
   askForANumber(guessedNum, 5)
 }

 function checkForGameover () {
   if (gameOver) {
     alert('reveal the restart button now, stop the game')
   } else {
     guessedNum = prompt('Type your number again!')
    // bugs?!
     askForANumber(guessedNum, 5)
   }
 }

// bugs?!
 if (!gameOver) {
   newGame()
 }
