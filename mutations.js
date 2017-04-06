// coded by Stu Wares, twitter.com/TeamRocketGB

/* Return true if the string in the first element of the array contains
all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the
letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the
string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the
letters in "line" are present in "Alien". */

/* 
more complex than I'd originally thought!
need to compare each letter individually?

set all to lower case
str.indexOf(searchValue[, fromIndex])
*/


function mutation(arr) {
  var mutated = [];
  
  

  for (var i = 0; i < arr.length; i++) {
  	mutated.push(arr[i].toLowerCase());
  }
  
  
}

mutation(["Hello", "hey"]);