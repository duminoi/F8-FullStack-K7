// //Window.scrollX ==> Lấy tọa độ so với top theo trục X
// //Window.scrollY ==> Lấy tọa độ so với top theo truc Y
// var lastPosition;

// var body = document.querySelector("body");
// window.addEventListener("scroll", function () {
//   console.log("Scrolling...");
//   var position = this.window.scrollY; //Lấy tọa độ so với top theo trục Y
//   //   console.log(position);
//   if (position > lastPosition) {
//     body.style.background = "red";
//   } else {
//     body.style.background = "white";
//   }
//   lastPosition = position;
// });

//Bài tạp 1: Kéo chuột xuống đổi body màu đỏ, kéo lên đổi body màu trắng

var btn = document.querySelector(".btn");
var btnTop = document.querySelector(".btn-top");

btn.addEventListener("click", function () {
  window.scroll({
    top: 500,
    behavior: "smooth",
  });
});
var beforePosition = 0;
window.addEventListener("scroll", function () {
  var position = this.window.scrollY;
  if (position > 100) {
    btnTop.style.display = "block";
  }
  if (position < beforePosition) {
    btnTop.style.display = "none";
  }
  beforePosition = position;
});
btnTop.addEventListener("click", function () {
  //   window.scrollY = 0;
  //   console.log(window.scrollY);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
