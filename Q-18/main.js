"use strict";
//Seeing the World:
// Store the locations in a array. Make sure the array is not in alphabetical order.
let locations = ["uk", "paris", "turkey", "Disney", "london"];
for (let i = 0; i < locations.length; i++) {
    //• Print your array in its original order.
    console.log(` orignal ` + locations[i]);
}
;
//• Print your array in alphabetical order without modifying the actual list.
console.log(`copy ` + [...locations].sort);
