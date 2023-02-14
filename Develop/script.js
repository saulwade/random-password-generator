// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variables
var specialChar = ["!", "'", "#", "$", "%", "&", "(", ")", ",", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];//array
var lowerC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //array
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];//array

function writePassword() {
  var password = generatePassword();//given
  var passwordText = document.querySelector("#password");//given
  if (password) {
    passwordText.value = password;
  }
};

function generatePassword() {

  //Dynamic local function variables
  var passwordString = '';//use this string in  the 'for loop' 
  var arrayHolderPassword = []//Empty array will have all user inputs .push.apply into if true

  //holds the user input for length of password
  var numberOfCharacters = window.prompt('How many characters would you like your password to contain? Choose between 8 and 128.');
  if (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    alert('This needs a value between 8 and 128! Start Over.')
    return; //handling error of out of bounds value and NaN
  }


  var chooseSpecialChar = window.confirm('Do you want special characters to be included?');
  var chooseUpperC = window.confirm('Do you want upper case characters to be included?');
  var chooseLowerC = window.confirm('Do you want lower case characters to be included?');
  var chooseNumericChar = window.confirm('Do you want numeric characters to be included?');


  if (chooseSpecialChar === false && chooseUpperC === false && chooseLowerC === false && chooseNumericChar === false) {
    alert('At least one character must be chosen! Start Over.')
    return //handles error if all prompts are false
  }

  // Ask user the character length desired in prompt and store the length of variable, and handle with conditional. later use in 'for loop'

  if (chooseSpecialChar) {
    Array.prototype.push.apply(arrayHolderPassword, specialChar);
  }

  if (chooseUpperC) {
    Array.prototype.push.apply(arrayHolderPassword, upperC);
  }

  if (chooseLowerC) {
    Array.prototype.push.apply(arrayHolderPassword, lowerC);
  }

  if (chooseNumericChar) {
    Array.prototype.push.apply(arrayHolderPassword, numeric);
  }

  for (var i = 0; i < numberOfCharacters; i++) {
    var newPasswordIndex = Math.floor(Math.random() * arrayHolderPassword.length);
    passwordString = passwordString + arrayHolderPassword[newPasswordIndex];
  }// This is the end of the loop
  return (passwordString);
} 


