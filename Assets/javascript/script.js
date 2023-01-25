// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Password Console.log
function generatePassword() {
  console.log ("Click to create password");
  
//Prompts for the User/Length of the password
let passwordLength = window.prompt ("Password Length");
console.log (passwordLength);

let lowercase = window.prompt("Would you like to have lowercase letters?");
console.log(lowercase);

let uppercase = window.prompt("Would you like to have upppercase letters?");
console.log(uppercase);

let number = window.prompt("Would you like to add numbers?")
console.log(number);

let characters = window.prompt("Would you like to add characters?")
console.log(characters);
  
//Variables
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz ";
var numbers = "0123456789";
var character = "!@#$%^&*+=?/";

//Arrays
var arrayuppercaseletters = uppercaseletters.split("");
var arraylowercaseletters = lowercaseletters.split("");
var arraynumbers = numbers.split("");
var arraycharacter = character.split("");  
  
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);