// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Password Console.log
function generatePassword() {
  console.log("Click to create password");

  //Prompts for the User/Length of the password
  let passwordLength = window.prompt("Password Length");
  console.log(passwordLength);

  let lowercase = window.prompt("Would you like to have lowercase letters?");
  console.log("lowercase selected: " + lowercase);

  let uppercase = window.prompt("Would you like to have uppercase letters?");
  console.log("uppercase selected: " + uppercase);

  let number = window.prompt("Would you like to add numbers?");
  console.log("number selected: " + numberString);

  let characters = window.prompt("Would you like to add characters?");
  console.log("characters selected: " + characters);

  // Variables
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numberString = "0123456789";
  var possibleCharacters = "!@#$%^&*+=?/";

  // Check what the user selected and add to possibleCharacters
  if (lowercase === "yes") {
    possibleCharacters += lowercaseLetters;
  }
  if (uppercase === "yes") {
    possibleCharacters += uppercaseLetters;
  }
  if (number === "yes") {
    possibleCharacters += numberString;
  }
  if (characters === "yes") {
    possibleCharacters += characters;
  }

  // If possibleCharacters is still an empty string, return an error message
  if (possibleCharacters === "") {
    return "Error: Please select at least one character type";
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
