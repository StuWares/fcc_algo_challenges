// coded by Stu Wares, twitter.com/TeamRocketGB

/* Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.*/

// straightforward slice/splice?

function slasher(arr, howMany) {
  var slashedUp = [];
  
  slashedUp = arr.splice(howMany);
  
  
  return slashedUp;
}

slasher([1, 2, 3], 2);

// easiest one so far!?