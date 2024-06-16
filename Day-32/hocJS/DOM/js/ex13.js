//load: (window) ==> Khi các tài  nguyên trên trang web tải xong( html, css, js, media...)
//DOMContentloaded ==> Khi hình thành cây DOM

//event fire
var getSizeImage = function () {
  var imgEL = document.querySelector("img");
  var width = imgEL.width;
  var height = imgEL.height;
  console.log(width, height);
};

document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.querySelector(".overlay");
  console.log(`DOM`);
  overlay.classList.add("show");
  getSizeImage();
});

window.addEventListener("load", function () {
  var overlay = document.querySelector(".overlay");
  console.log(`load`);
  overlay.style.opacity = 0; //Css cho mờ dần trước
  setTimeout(function () {
    overlay.classList.remove("show"); //sau đó mới xóa lớp overlay đi
  }, 1000);
  getSizeImage();
});
