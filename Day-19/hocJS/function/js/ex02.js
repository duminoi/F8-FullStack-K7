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
function display(callback) {
  console.log(`Display`);
  typeof callback === "function" && callback();
}
var showLog = function (a) {
  console.log("hello anh em F8", a);
};

display(function () {
  showLog("Hoàng An");
});

//Tạo 1 hàm không tham số, bên trong hàm đó gọi hàm callback có tham số và truyền đối số
// cách 2 để truyền tham số vào callback
function display2(callback, ...args) {
  console.log(`Display2`);
  typeof callback === "function" && callback(...args);
}

function showLog2(a, b) {
  console.log("hello anh em F8", a, b);
}

display2(showLog2, "Hoàng An", "JS");

function step1(callback) {
  setTimeout(function () {
    console.log("Bước 1");
    typeof callback === "function" && callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(function () {
    console.log("Bước 2");
    typeof callback === "function" && callback();
  }, 500);
}
function step3(callback) {
  setTimeout(function () {
    console.log("Bước 3");
    typeof callback === "function" && callback();
  }, 1500);
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
