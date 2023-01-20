// Assignment code here

//Password
function generatePassword() {
  console.log ("Click to create password");
  let pass = "";
}

//Prompts
var passwordLength = window.prompt ("Password Length");
console.log (passwordLength);

var lowercase = window.prompt("Would you like to have lowercase letters?");
console.log(lowercase);

var uppercase = window.prompt("Would you like to have upppercase letters?");
console.log(uppercase);

var numbers = window.prompt("Would you like to add numbers?")
console.log(numbers);

var characters = window.prompt("Would you like to add specialcharacters?")
console.log(characters);

//Variables
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ".split("");
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz ".split("");
var numbers = "0123456789 ".split("");
var characters = "!@#$%^&*+=?/;: ".split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
