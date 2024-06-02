// var btn = document.querySelector(".btn");
// var input = document.querySelector(".input");

// btn.addEventListener("click", function (e) {
//   //   console.log(this);
//   //   console.log(e.target);
//   //   console.log(e);
//   console.log(`clientX = ${e.clientX}`);
//   console.log(`clientY = ${e.clientY}`);
//   console.log(`offsetX = ${e.offsetX}`);
//   console.log(`offsety = ${e.offsetY}`);
// });

// input.addEventListener("focus", function (e) {
//   //   console.log(e);
//   //   var key = e.key;
//   //   var value = e.target.value;
//   //   console.log(`value = ${value}`);
// });

// document.body.addEventListener("keyup", function (e) {
//   console.log(e);
// });

//Xây dựng chức năng kéo thả
//mousedown, mouseup, mousemove

// var width = e2.clientX - e2.offsetX;
// var height = e2.clientY - e2.offsetY;
// var css = {
//     transform : `translate(${width},${height})`,
// };
var btn = document.querySelector("button");
var initWidth;
var initHeight;
btn.addEventListener("mousedown", function (e) {
  //Add Event kéo (mousemove)
  initWidth = e.offsetX;
  initHeight = e.offsetY;
  document.addEventListener("mousemove", handleDrag);
  document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", handleDrag);
  });
});

var handleDrag = function (e) {
  var width = e.clientX - initWidth - 10;
  var height = e.clientY - initHeight - 10;
  var css = {
    transform: `translate(${width}px ,${height}px )`,
    cursor: "move",
  };
  Object.assign(btn.style, css);
};
