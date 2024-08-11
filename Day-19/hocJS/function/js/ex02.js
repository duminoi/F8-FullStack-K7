//setInterval --> Lặp đi lặp lại 1 đoạn chương trình với 1 khoảng thời gian nhất định
//Ví dụ: 1 giây chạy lại 1 lần
// var count = 0;
// var id = setInterval(function () {
//   console.log("hello anh em", ++count);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

//Định nghĩa 1 hàm callback có đối số
// Cách 1
function display(callback) {
  console.log(`Display`);
  typeof callback === "function" && callback();
}
// var showLog = function (a) {
//   console.log("hello anh em F8", a);
// };

function showLog(a) {
  console.log("Hello anh em", a);
}
display(function () {
  showLog("Đức Minh");
});

//Để truyền đối số vào hàm callback --> Tạo 1 hàm không tham số, bên trong hàm đó gọi hàm callback có tham số và truyền đối số
// cách 2 để truyền tham số vào callback
// function display2(callback, ...args) {
//   console.log(`Display2`);
//   typeof callback === "function" && callback(...args);
// }

// function showLog2(a, b) {
//   console.log("hello anh em F8", a, b);
// }

// display2(showLog2, "Đức Minh", "JS");

function step1(callback) {
  setTimeout(function () {
    console.log("Bước 1");
  }, 1000);
  typeof callback === "function" && callback();
}

function step2(callback) {
  setTimeout(function () {
    console.log("Bước 2");
  }, 500);
  typeof callback === "function" && callback();
}
function step3(callback) {
  setTimeout(function () {
    console.log("Bước 3");
  }, 1500);
  typeof callback === "function" && callback();
}

step1(function () {
  step2(function () {
    step3();
  });
});
/**
 Về tìm hiểu: 
 1. Định nghĩa 1 hàm con
 2. Closure
 3. Kỹ thuật Thunk Function
 4. IIFE
 5. Giải thuật đệ quy
 */
