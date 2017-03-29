// Coded by Stu Wares, twitter.com/TeamRocketGB

// Reverse the provided string.

/*
reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG". 
*/

function reverseString(str) {
  var reverseMe = [];
  var finished = [];
  
  reverseMe = str.split(""); // .split the string into an array
  
  reverseMe.reverse(); // .reverse the array
  
  finished = reverseMe.join(""); // .join the array back up in a new array
  
  return finished; 
}

reverseString("hello");