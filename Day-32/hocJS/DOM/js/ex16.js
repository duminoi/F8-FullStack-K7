// var btn2 = document.querySelector(".btn-2");
// var sectionBtn = document.querySelector(".section-btn");
// var btn1 = sectionBtn.firstElementChild;
// var btn3 = sectionBtn.lastElementChild;

// var section1 = document.querySelector(".section-1");
// var section2 = document.querySelector(".section-2");
// var section3 = document.querySelector(".section-3");
var btns = document.querySelectorAll(".section-btn button");
console.log(btns);
var sections = document.querySelectorAll(".section");
console.log(sections);
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
