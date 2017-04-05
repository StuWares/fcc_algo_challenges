// coded by Stu Wares, twitter.com/TeamRocketGB

/* Write a function that splits an array (first argument)
into groups the length of size (second argument) and returns
them as a two-dimensional array. */

/* splice arr size times and push the return value into a new array*/


function chunkArrayInGroups(arr, size) {
  var choppedUp = [];
  var loopSize = 0;
      
  // if statement required to get the correct number of loops
  if (arr.length % size === 0) {
    loopSize = Math.floor(arr.length/size);
  } else {
    loopSize = Math.floor(arr.length/size) + 1;
  }

  // splice rather than slice gives more simple indexing i.e. start point is
  // always 0
  for (i = 0; i < loopSize; i++) {
    
  	choppedUp.push(arr.splice(0, size));
    
  }
 return choppedUp;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); 