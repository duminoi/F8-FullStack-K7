var modal = document.querySelector(".modal");
var closeBtn = modal.querySelector(".close");
var overlay = modal.querySelector(".modal-overlay");
var btn = document.querySelector("button");
btn.addEventListener("click", function () {
  modal.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("show");
});
overlay.addEventListener("click", function () {
  modal.classList.remove("show");
});

//Sử dụng esc để thoát overlay
document.addEventListener("keyup", function (e) {
  console.log("nhả phím");
  if (e.key === "Enter") {
    modal.classList.add("show");
  } else {
    if (e.key === "Escape") modal.classList.remove("show");
  }
});

var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  // ngăn hành động mặc địng của trình duyệt
  e.preventDefault();
  var nameEl = document.querySelector(".name");
  console.log(nameEl.value);
});
