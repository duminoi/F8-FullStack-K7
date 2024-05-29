/*
Event:
- Hành động từ phía người dùng tác động lên thẻ HTML
- Mặc định trình duyệt định nghĩa các event tương ứng với các thẻ html ( MỖi thẻ html sẽ có các event khác nhau)
- nhiệm vụ của lập trình viên JS
==> Lắng nghe event từ phía người dùng để xử lý
*/

/**
 Cú pháp lắng nghe sự kiện:
 element.tensukien = eventHandler (eventHandler là một hàm)

 element.adEventListener(tensukien, listener)
 (listener là 1 hàm)
 */

var btn = document.querySelector(".btn");
// console.dir(btn);
// // btn.onclick = function () {
// //   console.log("click me");
// // };
// btn.addEventListener("click", function () {
//   console.log("click me");
// });
// btn.addEventListener("click", function () {
//   console.log("Học DOM không khó");
// });
//Sử dụng .addEvenListener sẽ thêm listener chứ không phải ghi đè như .on_sukien

// btn.onclick = function () {
//   console.log("Học DOM không khó");
// };
// var items = document.querySelectorAll(".menu li");
// // console.log(items);
// items.forEach(function (item) {
//   item.onclick = function () {
//     console.log(item);
//   };
// });
var startBTn = document.querySelector(".start-btn");
var count = 0;
var handleClick = function () {
  count++;
  console.log(count);
  if (count % 5 === 0) {
    btn.removeEventListener("click", handleClick);
  }
};

startBTn.addEventListener("click", function (e) {
  console.log("đã bắt đầu");
  console.log(e);
  btn.addEventListener("click", handleClick);
});
