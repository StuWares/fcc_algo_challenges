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
  var checkThis = [];
  var againstThis = [];
  var checkResults = [];

  for (var i = 0; i < arr.length; i++) {
  	mutated.push(arr[i].toLowerCase());
  }
  
  checkThis = mutated[1].split("");
  againstThis = mutated[0].split("");
  
  for (var j = 0; j < checkThis.length; j++) {
    checkResults.push(againstThis[j].indexOf(checkThis[j]));
  }
 
 // now need to look for -1 in check results, return false if found, true if not
  return checkResults;
  
}

mutation(["Hello", "hey"]);
