const NumArrary = [1,2,3,4,5,6,7,8,9,0]
const special = ["!", "#", "$", "%", "&","*", "?", "@", "^"];
const tallLetter = 
const lowLetter = lowercase letters


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // prompt user for password criteria
  let length = window.prompt("How many characters would you like your password to contain?");
  if (length < 8 || length > 128){
    alert("Password must be between 8 and 128 characters");
    if (length > 8 || length < 128){
      confirm ("Would you like to include lowercase letters?");
    }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);