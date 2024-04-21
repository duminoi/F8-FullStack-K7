// Tự động chuyển về kiểu logic để so sánh (truthy, falsy)
//Falsy: 0, NaN, null, "", undefined, false
// Truthy: các trường hợp còn lại
var a = 10;
var b = a ? "F8" : "Đức Minh"; // Toán tử 3 ngôi

// Cú pháp truthy: variable
// Cú pháp falsy: !variable
// console.log(b);

//Toán tử && -->Tìm BIỂU THỨC sai, còn đúng thì còn chạy đến khi nào hết thì thôi
// var a = 1;
// var b = 0;
// var c = 3;
// var result = a && b && c;
// console.log(b);

//Toán tử || --> Tìm biểu thức đúng, còn sai là còn chạy đến khi nào hết thì thôi
var a = 1;
var result = a || "F8";
console.log(result);
