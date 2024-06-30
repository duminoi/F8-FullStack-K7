//Javascript module
//- CommonJS ==> NodeJS
//- ES6 Module
// const a = require("../../modules/module1.js");
// console.log(a);

import ahihi, {
  a as a1,
  b,
  getMessage,
  product,
} from "../../modules/module2.js";
// import ahihi from "../../modules/module2.js";
console.log(a1, b);
getMessage();
console.log(ahihi);
console.log(product);

