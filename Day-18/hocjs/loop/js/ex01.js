/*
vòng lặp:
- cú pháp trong lập trình
- cho phép đoạn chương trình chạy lặp đi lặp lại theo số lần nhất định


2. Loại vòng lặp
- Vòng lặp với số lần xác định trước
==> for
- Vòng lặp với số lần không xác định trước 
== > while, do while
*/

//Vòng lặp for
/**
 for ( initial; condition; step) {
    code
 }
 */
// for (var i = 1; i <= 10; i++) {
//   console.log(`Lan lap thu: ${i}`);
// }

for (var i = 10; i >= 1; i -= 2) {
  console.log(`Lan lap thu ${i}`);
}
var count = 0;
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    console.log(`i = ${i} - j = ${j}`);
    count++;
  }
}
console.log(count);

var n = 10;
var s = 0;
for (var i = 1; i <= n; i++) {
  s += i;
  console.log(`i = ${i} ==> s = ${s}`);
}

// S = 1 + 1*2 + 1*2*3 + ... + 1*2*4..*n
var n = 5;
var tmp = 1;
var s = 0;
for (var i = 1; i <= n; i++) {
  tmp = tmp * i;
  s += tmp;
}
console.log(s);
