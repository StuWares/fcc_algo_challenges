// coded by Stu Wares, twitter.com/TeamRocketGB

/* One of the simplest and most widely known ciphers is a Caesar cipher,
also known as a shift cipher. In a shift cipher the meanings of the letters
are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a
decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on. */

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// NOPQRSTUVWXYZABCDEFGHIJKLM
// A = unicode 65, M is 77, z 90
// 65 - 77, add 13
// 77 - 90, subtract 13

function rot13(str) { 
  var uniCoded = [];
  var uniShifted = [];
  var unCoded = [];
  
  /* convert str into an array of unicode */
  for (i = 0; i < str.length; i++) {
    uniCoded.push(str.charCodeAt(i));
  }
  /* shift unicode 13 places, ignoring non alpha characters */
  for (j = 0; j < uniCoded.length; j++) {
    if (uniCoded[j] >= 65 && uniCoded[j] <= 77) {
      uniShifted.push(uniCoded[j] + 13);
    } else if (uniCoded[j] >= 78 && uniCoded[j] <= 90) {
      uniShifted.push(uniCoded[j] - 13);
    } else {
    	uniShifted.push(uniCoded[j]);
    }
  }
  
  /* convert unicode back to text */
  for (k = 0; k < uniShifted.length; k++) {
    unCoded.push(String.fromCharCode(uniShifted[k]));
  }
  finalOutput = unCoded.join("");
 return finalOutput;
}


rot13("SERR PBQR PNZC");