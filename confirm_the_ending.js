// coded by Stu Wares, twitter.com/TeamRocketGB

// Check if a string (first argument, str) ends with the given target string (second argument, target).

/*
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring 
methods instead.
*/

// str.length - target.length is the key to this one?

unction confirmEnding(str, target) {
  var strLength = str.length;
  var targetLength = target.length;
  var strEnd = str.substr(-target.length, target.length);
  
  return strEnd = target;
}

confirmEnding("Bastian", "n");