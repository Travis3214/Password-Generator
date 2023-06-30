// Create arrays for characters user can pick from to include in password

// This array will be for the length of the password
var length = 8;
// This array is to include each type of character(s) the user selects
var choices = [];
// Numbers array
var numArrary = [1,2,3,4,5,6,7,8,9,0];
// Capitol letters array
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// Lower case letters array
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Special characters array
var special = ["!", "#", "$", "%", "&","*", "?", "@", "^"];

// Added a variable to the button for the user to click

var generateBtn = document.querySelector("#generate");

// Added event listener to the generate button. This responds to the users click

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
// This is a function to write the password in the box after computer generates it

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
    
    // These prompts/confirms ask the user for their input on what they want to include in the password. 
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