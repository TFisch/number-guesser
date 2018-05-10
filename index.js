
      
      var adjustButton = document.querySelector('#adjustButton');
      var allButtons = document.querySelector('buttons');
      var clearButton = document.querySelector('#clearButton');
      var guessSubmit = document.querySelector('#guessButton');
      var lastGuessDisplay = document.querySelector('#guessReadBack');
      var lastGuessText = document.querySelector('#lastGuessText');
      var maxRange = document.querySelector('#max');
      var minRange = document.querySelector('#min');
      var secretNumber = Math.floor(Math.random() * 101 + 1);
      var customRangeText = document.querySelector('#rangeText');
      var resetButton = document.querySelector("#resetButton")
      var userGuess = document.querySelector('#inputField');



clearButton.addEventListener('click', function() {
  document.querySelector("#inputField").value = "";
  clearButton.disabled = true;
})




function defineRange (minimum,maximum){
 

  minimum = minRange.value;
  maximum = maxRange.value;
  customRangeText.innerText = "Custom Range Set!"
  var customSecretNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
  secretNumber = customSecretNumber;
  return secretNumber;
}

function levelUp(){

  alert("You Got it! Range Increased!");

  }









adjustButton.addEventListener('click', function() {
  checkRange();
  event.preventDefault();
  defineRange();
})

guessSubmit.addEventListener('click', function() {
  compareNum();
  var lastGuess = userGuess.value;
  lastGuessDisplay.innerText = lastGuess;
  event.preventDefault();  
})

userGuess.addEventListener('keyup', function(){
  if (userGuess.value === ""){
    adjustButton.disabled = true;
    guessSubmit.disabled = true;
    clearButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearButton.disabled = false;
    guessSubmit.disabled = false;
    resetButton.disabled = false;
  }
})

adjustButton.addEventListener('keyup', function(){
  var maximum = maxRange.value;
  var minimum = minRange.value;
  if (maximum === "" || minimum === ""){
    adjustButton.disabled = true;
  } else {
    adjustButton.disabled = false;
  }
})






  function checkRange(){
    var minimum = minRange.value;
    var maximum = maxRange.value;
    var topText = lastGuessText;
    if (minimum > maximum || maximum === minimum || minimum < 1 || maximum < 1) {
      topText.innerHTML = "Invalid Range!";
    } 
  }

  function compareNum() {
          
          var topText = lastGuessText;
          var lastGuess = userGuess.value;
          var parsedValue  = parseInt(lastGuess);
          if (isNaN(parsedValue) || parsedValue > 100 || parsedValue < 1){
          document.querySelector('#guessReadBack').innerHTML = "";
          document.querySelector('#hint').innerHTML = "Invalid Guess, Try again!";           
          }

        else if (parsedValue > secretNumber){
          document.querySelector('#hint').innerHTML = "Too High!";
          topText.innerText = "Your Last Guess Was";
      } else if (parsedValue < secretNumber){
          document.querySelector('#hint').innerHTML = "Too Low!";
          topText.innerText = "Your Last Guess Was";
      } else {
        document.querySelector('#hint').innerHTML = "Boom!";
        topText.innerText = "You Got It!";
        levelUp();
       

      }
    }
 

    








