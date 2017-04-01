// coded by Stu Wares, twitter.com/TeamRocketGB

/* Return the provided string with the first letter of
each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting
words like "the" and "of". */

/* original version used more variables, rather than dot notation.
 changed it as I need to get into the habit of coding that way!*/

 /* realised I don't actually need any variables here, all of this could
 be done straight on the str argument.  Didn't change it, left it as
 a lesson for myself! */

function titleCase(str) {

	var lowerCase = [];


	lowerCase = str.toLowerCase().split(" ") // turns str into an array, all lower case

	.map(function (val) {
		return (val.charAt(0).toUpperCase + val.slice(1)); // .charAt(0) targets first letter for toUpperCase
	})

	.join(" ");

	return titleCased;
}

titleCase("I'm a little tea pot");