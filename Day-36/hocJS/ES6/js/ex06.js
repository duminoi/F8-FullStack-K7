//Javascript module
//- CommonJS ==> NodeJS
//- ES6 Module
// const { a, b } = require("../../modules/module1.js");
import { a, b, something } from "../../modules/module2.js";
console.log("a", a);
console.log("b", b);
console.log(something());

// import ahihi, {
//   a as a1,
//   b,
//   getMessage,
//   product,
// } from "../../modules/module2.js";
// // import ahihi from "../../modules/module2.js";
// console.log(a1, b);
// getMessage();
// console.log(ahihi);
// console.log(product);

import { product } from "../../modules/module2.js";
console.log("product", product);
