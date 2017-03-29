// Coded by Stu Wares, twitter.com/TeamRocketGB

/* Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product 
of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 */

/*
factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/


function factorialize(num) { 	// line set up by fcc
	var factor = 1;				// have to initialze at 1 as 0 would break the multiplication

	for (var i = 1; i <= num; i++) {	//create a for loop which uses num as the count
		factor *= i;
	}
	

  return factor;				// line set up by fcc was return num, changed to factor
}								// line set up by fcc

factorialize(5);				// line set up by fcc