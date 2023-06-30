// Created arrays for characters in password
// These are the options the user can pick from
var length = 8;
var choices = [];
var numArrary = [1,2,3,4,5,6,7,8,9,0];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!", "#", "$", "%", "&","*", "?", "@", "^"];

// Added a variable to the button for the user to click

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button. This responds to the users click

generateBtn.addEventListener("click", writePassword);

// This is a function to generate the password after receiving the user inputs

function generatePassword(){
    var password = "";
    for(var index = 0; index < length; index++){
      var randomize = Math.floor(Math.random() * choices.length);
      password = password + choices[randomize];
    }
    return password
}
// This is a function to write the password after computer generates it

function writePassword() {
    var answers = getPrompts();
    var passwordText = document.querySelector("#password");

    if (answers) {
    var yourPassword = generatePassword();
    passwordText.value = yourPassword;
  } else {
    passwordText.value = "";
  }
}

// This function receives the users input and decides what characters should be used when generating the password

function getPrompts(){
    choices = [];
    length = parseInt(prompt("How many characters would you like your password to contain?"));
    
    if(isNaN(length) || length < 8 || length > 128) {
      alert("Password must be between 8 - 128 characters long.");
      return false;
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