// coded by Stu Wares, twitter.com/TeamRocketGB

/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
 */

/* .map .sort then pop? */

function largestOfFour(arr) {

    arr.map(function (val){
        val.sort(function (a, b){
            return a - b;
        });
     });
    
    arr = arr.map(function (val){   // arr = arr.map, otherwise arr.map alone returns the arrays without the last index
      return val.pop();
    });
    
return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
