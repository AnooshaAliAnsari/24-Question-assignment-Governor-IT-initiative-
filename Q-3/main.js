"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Anoosha ali ansari";
console.log("lowercase:", personName.toLocaleLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
