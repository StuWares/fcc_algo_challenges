// coded by Stu Wares, twitter.com/TeamRocketGB

// Return true if the given string is a palindrome. Otherwise, return false.

// convert the sting to an array, cut it in half, reverse one then compare?

function palindrome(str) {
  var lowerCase = "";
  var noSpecials = "";
  var oddEvenTest = 0;
  var splitHalf = [];
  var pinchTo = [];
  var shiftTo = [];
  
  // turns the argument into an array with only alphanumerics
  lowerCase = str.toLowerCase();
  noSpecials = lowerCase.match( /[a-z0-9]/gi );	
  
  /* compares first and last letters in the array, then works inwards
  returns false if no match found at any point, true if all parts are checked and
  found to match  */
 if (noSpecials.length > 1) {
 	for ( i = 0; i < noSpecials.length; i++) {
 		pinchTo = noSpecials.pinch();
 		shiftTo = noSpecials.shift();

 		if (pinchTo !== shiftTo) {
 			return false;
 		}
 	}

 } else {
 	return true;
 } 

  
  // no need for return here
}



palindrome("e#ye");