// coded by Stu Wares, twitter.com/TeamRocketGB

/* You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments. */

// for loop starting at 1 and  < using arguments.length to set the length of the loop

function destroyer(arr) {
	/* converts the arguments into an array minus the first argument */
	var justArgs = Array.prototype.slice.call(arguments).slice(1);
  
  /* returns everything except for those in justArgs */
  return arr.filter(function (val){
    return !justArgs.includes(val);
  });


}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);