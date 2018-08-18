// Names and Input
var hacker1 = "Jack";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log( "The Driver has the longest name, it has " + hacker1.length + " characters." );
} else if (hacker1.length < hacker2.length) {
  console.log( "Yo, navigator got the longest name, it has " + hacker2.length + " characters." );
} else {
  console.log( "You both got equally long names,  " + hacker2.length + " characters." );
}

// Loops
function concat(word) {
  var result = "";
  for (var i = 0; i < word.length; i++) {
    result += (word.charAt(i) + " ");
  }
  return result;
}

function upper() {
  var up = hacker1.toUpperCase();
  console.log(concat(up));
}
upper();

function reverse(string) {
  var result = "";
  for (var i = string.length - 1; i >= 0; i--)
    result += string[i];
  console.log(result);
}
reverse(hacker2);


function compare(a, b) {
  return a.localeCompare(b);
}
var driverFirst = "The driver's name goes first";
var navFirst = "Yo, the navigator goes first definitely";
console.log((compare(hacker1, hacker2) == -1) ? driverFirst : navFirst);

