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
Didn't read the original problem properly,
it was actuall quite straightforward in the end!

set all to lower case
str.indexOf(searchValue[, fromIndex])
*/


function mutation(arr) {
  var checkThis = arr[1].toLowerCase();
  var againstThis = arr[0].toLowerCase();
  
  for (i = 0; i < checkThis.length; i++) {
    if (againstThis.indexOf(checkThis[i] < 0) 
      return false;
    
  } 
   return true;
} 

mutation(["hello", "hey"]);
