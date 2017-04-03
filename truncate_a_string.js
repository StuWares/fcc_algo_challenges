// coded by Stu Wares, twitter.com/TeamRocketGB

/* Truncate a string (first argument) if it is longer than the given maximum string length
(second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3,
then the addition of the three dots does not add to the string length in determining
the truncated string. */

/* check for:
num is eaqual to or more than str.length - return str
num is 3 or less - return truncated string plus ...
num is greater than 3 - return truncated string including ... */


function truncateString(str, num) {
  
	if (num >= str.length) {
		return str;
	} else if (num <= 3) {
		return str.slice(0, num) + "...";
	} else {
		return str.slice(0, num - 3) + "...";
	} 
}

truncateString("A-tisket a-tasket A green and yellow basket", 3);
