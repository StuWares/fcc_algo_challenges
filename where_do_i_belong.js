// coded by Stu Wares, twitter.com/TeamRocketGB

/* Return the lowest index at which a value (second argument)
should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is
greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the
array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2)
and greater than 5 (index 1). */

function getIndexToIns(arr, num) {
  var sortedArr = arr.sort(function (a, b){ // put the array in numerical order
    return a-b;
  });
  
  /* create a loop which compares num to each index of arr
  end if less than the current index and return that index */
  for (i = 0; i < arr.length; i++) {
    
  	if (num <= arr[i]) {
  		return i;
  	} 
    
  }
  /* if num is bigger than all numbers in arr, the loop
  will end, return arr length as num would be put in this index*/
  return arr.length;
  
}

getIndexToIns([2, 5, 10], 15);