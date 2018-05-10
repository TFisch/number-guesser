      var adjustButton = document.querySelector('#adjustButton');
      var allButtons = document.querySelector('buttons');
      var clearButton = document.querySelector('#clearButton');
      var customRangeText = document.querySelector('#rangeText');
      var guessSubmit = document.querySelector('#guessButton');
      var lastGuessDisplay = document.querySelector('#guessReadBack');
      var lastGuessText = document.querySelector('#lastGuessText');
      var maxRange = document.querySelector('#max');
      var minRange = document.querySelector('#min');
      var resetButton = document.querySelector("#resetButton")
      var secretNumber = Math.floor(Math.random() * 101 + 1);
      var userGuess = document.querySelector('#inputField');

adjustButton.addEventListener('click', function() {
  checkRange();
  event.preventDefault(); 
 
})



clearButton.addEventListener('click', function() {
  document.querySelector("#inputField").value = "";
  clearButton.disabled = true;
})

guessSubmit.addEventListener('click', function() {
  compareNum();
  var lastGuess = userGuess.value;
  lastGuessDisplay.innerText = lastGuess;
  event.preventDefault();  
})

userGuess.addEventListener('keyup', function(){
  if (userGuess.value === ""){
    guessSubmit.disabled = true;
    clearButton.disabled = true;
    resetButton.disabled = true;
    adjustButton.disabled = true;
  } else {
    clearButton.disabled = false;
    guessSubmit.disabled = false;
    resetButton.disabled = false;
    adjustButton.disabled = false;
  }
})
  
  function checkRange(){
    var minimum = minRange.value;
    var maximum = maxRange.value;
    var topText = lastGuessText;
    if (minimum > maximum || maximum === minimum || minimum < 1 || maximum < 1) {
       customRangeText.innerText = "Invalid Range!";
  } else {  defineRange();
    } 
  }

  function compareNum() {
          var topText = lastGuessText;
          var lastGuess = userGuess.value;
          var parsedValue  = parseInt(lastGuess);
          var minimum = minRange.value;
          var maximum = maxRange.value;
          if (isNaN(parsedValue) || parsedValue > maximum || parsedValue < minimum){
           document.querySelector('#guessReadBack').innerHTML = "";
           document.querySelector('#hint').innerHTML = "Invalid Guess, Try Again";           
          }
          else if (parsedValue > secretNumber){
           document.querySelector('#hint').innerHTML = "Too High!";
           topText.innerText = "Your Last Guess Was";
          } else if (parsedValue < secretNumber){
           document.querySelector('#hint').innerHTML = "Too Low!";
           topText.innerText = "Your Last Guess Was";
          } else {
            document.querySelector('#hint').innerHTML = "Boom! You Got It!";
            topText.innerText = "Range Expanded + New Number Generated!";
            maxUp();
            minDown();
            levelUp();
        }
    }
 
function defineRange (minimum,maximum){
  var minimum = minRange.value;
  var maximum = maxRange.value;
  customRangeText.innerText = "Custom Range Set!"
  var customSecretNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
  secretNumber = customSecretNumber;
  return secretNumber;
}
 
function levelUp (minimum,maximum){
  var minimum = minRange.value;
  var maximum = maxRange.value;
  customRangeText.innerText = "Custom Range Set!"
  var customSecretNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
  secretNumber = customSecretNumber;
  return secretNumber;
}

function minDown (minimum){
  var minimum = parseInt(minRange.value);
  if (minimum > 11){
    var newMin = minimum - 10;
    minRange.value = newMin;
    return minRange;
} else if (minimum > 1 && minimum < 10) { 
    minRange.value = 1; 
} else {
    return minRange;
}
}

function maxUp (maximum){
  var maximum = parseInt(maxRange.value);
  var newMax = maximum + 10;
  maxRange.value = newMax;
  return maxRange;
}
 



