// Created arrays for characters in password
var length = 8;
var choices = [];
var numArrary = [1,2,3,4,5,6,7,8,9,0];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!", "#", "$", "%", "&","*", "?", "@", "^"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // prompt user for password criteria
  let length = window.prompt("How many characters would you like your password to contain?");
  if (length < 8 || length > 128){
    alert("Password must be between 8 and 128 characters");
    }
    if (length > 8 || length < 128){
      confirm ("Would you like to include lowercase letters?");
    }
  }

// Write password to the #password input
function writePassword() {
    var answers = getPrompts();

    if (answers) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
  
  function getPrompts(){
    choices = [];
    length = parseInt(prompt("How many characters would you like your password to contain?"));
    
    if(isNan(length) || length < 8 || length > 128) {
    alert("Must be a number between 8 - 128.");
    return false
    }

    if (confirm("Do you want your password to contain lowercase characters?")){
      choices = choices.concat(lowercase);
    }

    if (confirm("Do you want your password to contain uppercase characters?")){
      choices = choices.concat(uppercase);
    }
    
    if (confirm("Do you want your password to contain special characters?")){
      choices = choices.concat(special);
    }

    if (confirm("Do you want your password to contain numbers?")){
      choices = choices.concat(numArrary);
    }
    return true;
}