

// Takes userID and pass and checks if they are not the same
function notSame(userID, password) {
  return userID != password;
}
/*Takes the userID and password and tells if it is equal to or greater than 6*/
function reqLength(userID, password) {
  return userID.length >= 6 && password.length >= 6;
}
/*Checks if the Username does not include the characters "!,$,#"*/
function reqChar(userID) {
  var x = userID;
  return !x.includes("!") && !x.includes("$") && !x.includes("#");
}

// Takes the password and checks if it contains at least one of the characters
function reqPass(password) {
  return password.includes("!") || password.includes("$") || password.includes("#");
}
// var x = password;

// Takes the password and sees if it is not "password"
function notPassword(password) {
  return !password.includes("password");
}


// One function that checks all the criteria above
function check(userID, password) {
  return notSame(userID, password) && reqLength(userID, password) && reqChar(userID) && reqPass(password) && notPassword(password);
}

// Checks if the password contains at least one digit
function reqDigit(password) {
  return password.includes(0) ||  password.includes(1) || password.includes(2) || password.includes(3) ||  password.includes(4) || password.includes(5) || password.includes(6) ||  password.includes(7) || password.includes(8) || password.includes(9);
}

// Checks if the password contains a lower case and uppercase letter
function reqCase(password) {
  return password != password.toLowerCase() && password != password.toUpperCase();
}
//Converts Celsius to Fahrenheit
var cTemp = 22;
function toF(cTemp) {
  return(cTemp + "C  is " + (cTemp*1.8+32) + "F");
}
//Converts Fahrenheit to Celsius
var fTemp = 77;
function toC(fTemp) {
  return(fTemp + "F  is " + ((fTemp-32)/1.8) + "C");
}

// funtion to subtract two numbers
function subtract(x, y) {
  return x - y;
}

// funtion to multiple two numbers
function multiply(x, y) {
  return x * y;
}

// funtion to divide two numbers
function divide(x, y) {
  return x / y;
}

// Prompts for a name and alerts a greeting using the name
var name = window.prompt("What's your name?");
window.alert("Hi " + name);

// function that reverses a string character by character
var text = "JavaScript";
function rev(text) {
  return text.charAt(text.length-1) + text.charAt(text.length-2) + text.charAt(text.length-3) + text.charAt(text.length-4) + text.charAt(text.length-5) + text.charAt(text.length-6) + text.charAt(text.length-7) + text.charAt(text.length-8) + text.charAt(text.length-9) + text.charAt(text.length-10);
}

//function with two arguments that uses a constant and tells the lifetime supply of a snack
function supply(age, amount) {
  const maxAge = 100;
  return (maxAge-age)*amount*365;
}

// function using Luhn formula to check a credit card
// Still pending https://www.learnacademy.org/current-days/765
var cc = "1234567891234567";
var last = cc.charAt(cc.length-1);
