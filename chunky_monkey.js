// coded by Stu Wares, twitter.com/TeamRocketGB

/* Write a function that splits an array (first argument)
into groups the length of size (second argument) and returns
them as a two-dimensional array. */

/* slice arr size times and push the return value into a new array
map or for? */



function chunkArrayInGroups(arr, size) {
  var choppedUp = [];

  
  	choppedUp[i].push(function (val) {
      // for loop which iterates at size and slices
    });  


  return choppedUp;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);








/* *** wrong approach***
 works unless size is greater than the possible number
of arrays 
function chunkArrayInGroups(arr, size) {
  var choppedUp = [];

  for (i = 0; i < size; i++) {
    if (arr === []) {
      return choppedUp;
    } else {
  	choppedUp[i] = arr.splice(0, size);
    }
  }


  return choppedUp;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); */