// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
var numberOfCharacters = prompt("enter the number of character you would like to use: choose from 8 to 128 characters");
var upperCase = prompt("would you like to use upper case?");
var lowerCase = prompt("would you like to use lower case?");
var number = prompt("would you like to use number");
var specialCharacters= ("would you like to include special characters");
var CharacterOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = "";

numberOfCharacters.addEventListener(characterInput);
upperCase.addEventListener(UpperCaseInput)
lowerCase.addEventListener(LowerCaseInput)
numberCase.addEventListener(NumbersInput)

document.getElemntById("password").value = password;

function eventListener () {
  for(var i=0; i <= numberOfCharacters; i++) {
    password = password + CharacterOptions.charAt(Math.floor(Math.random() * Math.floor(CharacterOptions.length - 1)));
  }

}

generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener('submit')
preventDefault()


