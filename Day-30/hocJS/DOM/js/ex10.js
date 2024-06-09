var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Bấm chuột xuống tại progress-bar ==> Chấm màu tím di chuyển tói vị trí vừa bấm

//Lấy tọa độ tại vị trí bấm (offsetX)
var offsetX;
//tính chiều rộng của progress-bar
var progressBarWidth = progressBar.clientWidth;
var initClientX = 0;
var lastOffsetProgressBar = 0;
var offsetProgressBar = 0;
progressBar.addEventListener("mousedown", function (e) {
  offsetX = e.offsetX;
  //Tính tỷ lệ phần trăm giữa tọa độ bấm xuống và chiều rộng
  var rate = (offsetX / progressBarWidth) * 100;
  //Cập nhật CSS vào progress
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX;
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  //   var offsetXSpan = e.offsetX;
  //   var rate = ((offsetX + offsetXSpan / 2) / progressBarWidth) * 100;
  //   console.log("rate mousedown", rate);
  //   progress.style.width = rate + "%";
  document.addEventListener("mousemove", handleDrag);
  initClientX = e.clientX; //Gán vị trí của button màu tím so với body
});

// var initX;
// function handleUp(e) {
//   progressSpan.removeEventListener("mousedown", handleDown);
//   //   progressSpan.removeEventListener("mousemove", handleMove);
// }
// function handleMove(e) {
//   var currentX = e.clientX;
//   var rate = ((progressBarWidth - currentX) / progressBarWidth) * 100;
//   progress.style.width = rate + "%";
//   console.log("currentX", currentX);
//   console.log("rate", rate);

//   //   progressSpan.style.width = `${distance}px`;
// }
// function handleDown(e) {
//   e.stopPropagation();
//   //   initX = e.offsetX;
//   progressSpan.addEventListener("mousemove", handleMove);
//   progressSpan.addEventListener("mouseup", handleUp);
// }
// progressSpan.addEventListener("mousedown", handleDown);

document.addEventListener("mouseup", function (e) {
  document.removeEventListener("mousemove", handleDrag);
  lastOffsetProgressBar = offsetProgressBar;
});

var handleDrag = function (e) {
  var clientX = e.clientX;
  offsetProgressBar = clientX - initClientX;
  var rate =
    ((offsetProgressBar + lastOffsetProgressBar) / progressBarWidth) * 100;
  progress.style.width = rate + "%";
};
