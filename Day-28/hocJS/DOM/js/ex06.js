//Dùng inline css ==> Thêm trực tiếp css từ js

var styleBtn1 = document.querySelector(".style-1");
var boxEl = document.querySelector(".box");
styleBtn1.addEventListener("click", function () {
  boxEl.style.color = "red";
});
var styleBtn2 = document.querySelector(".style-2");

styleBtn2.addEventListener("click", function () {
  //   boxEl.style.fontStyle = "italic";
  //   boxEl.style.fontWeight = "700";
  var css = {
    fontStyle: "italic",
    fontWeight: "700",
    backgroundColor: "gray",
  };
  Object.assign(boxEl.style, css);
}); //thuộc tính sẽ viết bằng cách xóa dấu gạch ngang đi

//Bài tập: click vào button Style 3 ==> Thêm ảnh nền (background-image) với hình ảnh trong folder images

var styleBtn3 = document.querySelector(".style-3");
var cssBackground = {
  backgroundImage: ` url("./image/ex06.jpg")`,
};

styleBtn3.addEventListener("click", function () {
  Object.assign(boxEl.style, cssBackground);
});
