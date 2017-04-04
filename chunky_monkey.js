// coded by Stu Wares, twitter.com/TeamRocketGB

/* Write a function that splits an array (first argument)
into groups the length of size (second argument) and returns
them as a two-dimensional array. */

/* slice arr size times and push the return value into a new array*/


// works unless size is greater than the array, returns empty arrays
function chunkArrayInGroups(arr, size) {
  var choppedUp = [];

  for (i = 0; i < size; i++) {
  	choppedUp.push(arr.splice(0, size));
  }


  return choppedUp;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); 