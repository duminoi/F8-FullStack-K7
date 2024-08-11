//Event object

//1. preventDefault()
// => Ngăn hành động mặc định của trình duyệt với các thẻ html

//2. stopPropagation()
// var link = document.querySelector(".link");
// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(this.href);
// });

var menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  var x = e.clientX;
  var y = e.clientY;
  var css = {
    display: "block",
    top: y + "px",
    left: x + "px",
  };
  Object.assign(menu.style, css);
});

document.addEventListener("click", function (e) {
  console.log("thẻ cha");
  e.preventDefault();
  var css = {
    display: "none",
  };
  Object.assign(menu.style, css);
});

menu.addEventListener("click", function (e) {
  e.stopPropagation(); // sẽ ko gọi đến sự kiện của thg cha(document) ngăn chăn hiện tượng nổi bọt
  console.log("thẻ con");
  e.preventDefault();
  if (e.target.nodeName === "LI") {
    e.target.style.color = "yellow";
  }
});
