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

  
  return ; // variable here must be a boolean
}



palindrome("e#ye");