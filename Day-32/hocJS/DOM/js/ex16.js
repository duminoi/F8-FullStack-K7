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
    console.log(btn.style.color);
    window.scroll({
      top: `${sections[index].offsetTop - 47}`,
      behavior: "smooth",
    });
  });
});

var sectionLoca = [0, 500, 1200];
window.addEventListener("scroll", function () {
  var position = this.window.scrollY;
  console.log("Position: ", position);
  if (position >= sectionLoca[0] && position < sectionLoca[1]) {
    btns.forEach((btn) => {
      btn.classList.remove("red");
    });
    btns[0].classList.add("red");
  } else if (position >= sectionLoca[1] && position < sectionLoca[2]) {
    btns.forEach((btn) => {
      btn.classList.remove("red");
    });
    btns[1].classList.add("red");
  } else {
    btns.forEach((btn) => {
      btn.classList.remove("red");
    });
    btns[2].classList.add("red");
  }
});
