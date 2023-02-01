// Assignment code here
// First to do list all the array we may use
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var alphaLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Variable Declaration
var confLength = "";
var confSpeChar;
var confNumChar;
var confUpperCase;
var confLowerCase;

//main function
function generatePassword() {
  var confirmLength = prompt(
    "How long would you like your password(8-128)?"
  );
    //how many kind of parameters user wants
  var confSpeChar = confirm(
    "Click OK to confirm if you would like to include special characters"
  );
  var confNumChar = confirm(
    "Click OK to confirm if you would like to include numeric characters"
  );
  var confUpperCase = confirm(
    "Click OK to confirm if you would like to include uppercase characters"
  );
  var confLowerCase = confirm(
    "Click OK to confirm if you would like to include lowercase characters"
  );
  // Loop if user didnt pick any parameters
  while (
    confSpeCha === false &&
    confNumChar === false &&
    confUpperCase === false &&
    confLowerCase === false
  ) {
    alert("You have to choose at least one parameter");
 


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
