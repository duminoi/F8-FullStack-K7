// var btn2 = document.querySelector(".btn-2");
// var sectionBtn = document.querySelector(".section-btn");
// var btn1 = sectionBtn.firstElementChild;
// var btn3 = sectionBtn.lastElementChild;

// var section1 = document.querySelector(".section-1");
// var section2 = document.querySelector(".section-2");
// var section3 = document.querySelector(".section-3");
var btns = document.querySelectorAll(".section-btn button");

var sections = document.querySelectorAll(".section");

btns.forEach(function (btn, index, arrBtn) {
  btn.addEventListener("click", function () {
    arrBtn.forEach(function (btn) {
      btn.style.color = "black";
    }); //Kiểm tra những button màu đỏ thì chuyển về đen
    btn.style.color = "red"; //thêm màu đỏ
    window.scroll({
      top: `${sections[index].offsetTop - 50}`,
      behavior: "smooth",
    });
  });
});
var sectionLocation = [0, 550, 1200];
//cuộn đổi màu button
window.addEventListener("scroll", function () {
  var position = window.scrollY;
  console.log("position", position);
  if (position >= sectionLocation[0] && position < sectionLocation[1]) {
    console.log("section1");
    btns.forEach((item) => {
      item.style.color = "black";
    });
    btns[0].style.color = "red";
  } else if (position >= sectionLocation[1] && position < sectionLocation[2]) {
    console.log("section2");
    btns.forEach((item) => {
      item.style.color = "black";
    });
    btns[1].style.color = "red";
  } else {
    console.log(`section3`);
    btns.forEach((item) => {
      item.style.color = "black";
    });
    btns[2].style.color = "red";
  }
});
