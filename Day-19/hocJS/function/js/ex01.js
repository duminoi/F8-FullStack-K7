/**
 Hàm là gì ?
 - Cú pháp trong lập trình giúp tách các đoạn chương trình con trong chương tình lớn để tái sử dụng
 - Thể hiện là 1 chức năng (Động từ)
 - Đặt tên hàm theo quy tắc camelCase và sử dụng động từ
 ví dụ: sum, getTotal, setMessage, getMessage, showUsers, makeMenu, buildMenuTree


 Cú pháp:
 - Định nghĩa hàm
 function tenham(
    Nội dung hàm
 )
 function tenham(thamso1, thamso2, thamso3, ....)
 {
    Nội dung hàm
 }
 ==> Tham số: parameters

- Gọi hàm
tenham()
tenham(doiso1, doiso2, doiso3,...)
==> Đối số: arguments

Hàm có từ khóa return --> Hàm có giá trị trả về
Khi từ khóa return được gọi --> Các đoạn code bên dưới return không được hoạt động

Biến toàn cục: Sử dụng ở phạm vi ngoài hàm
Biến cục bộ: Sử dụng ở phạm vi trong hàm

Trên thực tế: một hàm có thể gọi hàm khác

Hàm ẩn danh (Hàm không tên, Anonymous funtion)
function() {
    Nội dung hàm
}
Lưu ý: Hàm ẩn danh sẽ không gọi và định nghĩa được (Trừ khi gán vào 1 biến hoặc đưa vào tham số của 1 hàm khác)
 */

function showMessage(msg, type = "success") {
  console.log("Học JS không khó");
  console.log(msg);
  console.log(type);
  return 1;
}
// showMessage("F8", "string"); // Lời gọi hàm chủ động: có dấu ()

// var a = showMessage("F8", "string");
// console.log(a);

// function division(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return "Không tính được";
// }

// console.log(division(10, 2));
// console.log(division(10, 0));

// var a = 0;
// function getNumber() {
//   return a;
// }

// function setNumber(value) {
//   a = value;
// }

// setNumber(10);
// console.log(getNumber());

// function sum(a, b) {
//   total = a + b;
//   return total;
// }

// console.log(sum(10, 20));

// function sum(a, b) {
//   return a + b;
// }

// function showResult() {
//   var total = sum(10, 20);
//   console.log(total);
// }

// showResult();
// Để hiểu được luồng hàm chạy thế nào thì đi từ lời gọi hàm

// Declaration function
// function showNumber() {
//   console.log("number");
// }
// showNumber();

// Expression function
// var showMessage = function () {
//   console.log("Học lập trình không khó");
// };
// showMessage();

// var getTotal = function sum(a, b) {
//   return a + b;
// };
// console.log(getTotal(10, 20));

// function sum(a, b) {
//   return a + b;
// }
// var getTotal = sum;
// console.log(getTotal(10, 20));
// console.log(sum(10, 20));

function display(callback) {
  console.log("Display");

  typeof callback === "function" && callback();
}

function handleLog() {
  console.log("Hello anh em");
}

// display(handleLog);

//setTimeout() --> Delay quá trình thực thi câu lệnh
/**'
 setTimeout(callback, time, args)
 */

setTimeout(
  function (a, b, c) {
    console.log("hello anh em", a, b, c);
  },
  1000,
  "a",
  "b",
  "c"
);

// function max(a, b) {
//   console.log(arguments); //Array like object
//   console.log(a, b);
// }
// max(5, 10, 15, 20, 25, 30);

function max2(a, b, ...args) {
  console.log(a, b);
  console.log(args);
}

max2(5, 10, 15, 20, 25, 30);
