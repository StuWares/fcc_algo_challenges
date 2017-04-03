// coded by Stu Wares, twitter.com/TeamRocketGB

/* Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
  
	var repeatStr = "";

	if (num <= 0) {			// returns empty string if val is not a positive
		return repeatStr;
	} else {
		for (i = 0; i < num; i++) {			// simple for loop seemed the best here
			repeatStr = repeatStr + str;
		}
	}


  return repeatStr;
}

repeatStringNumTimes("abc", 3);