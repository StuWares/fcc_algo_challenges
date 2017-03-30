// coded by Stu Wares, twitter.com/TeamRocketGB

// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  var lowerCase = "";
  var noSpecials = "";
  var popTo = [];
  var shiftTo = [];
  var arrLength = 0;
  
  // turns the argument into an array with only alphanumerics
  lowerCase = str.toLowerCase();
  noSpecials = lowerCase.match( /[a-z0-9]/gi );	
  arrLength = noSpecials.length;
  
/* compares first and last letters in the array, then works inwards
  returns false if no match found at any point, true if all parts are checked and
  found to match  */
 
 	for ( i = 0; i < arrLength; i++) {
      if (noSpecials.length > 1) {
 		popTo = noSpecials.pop();
 		shiftTo = noSpecials.shift();
      
 		if (popTo !== shiftTo) {
 			return false;
 		}
 	} else {
      return true;
    }

    }

  
  // no need for return here
}
palindrome("eye");
