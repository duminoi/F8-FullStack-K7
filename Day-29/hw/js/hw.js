var prev = document.querySelector(".slide-nav .prev");
var next = document.querySelector(".slide-nav .next");
var item = document.querySelectorAll(".item img");
var dots = document.querySelectorAll(".dot");
var sliderInner = document.querySelector(".slide-inner");

var position = 0;
var index = 0;
dots[index].classList.add("active");
function handleClick(direction) {
  if (direction === 1) {
    if (Math.abs(position) < item[0].clientWidth * (item.length - 1)) {
      position = position - item[0].clientWidth;
      dots[index].classList.remove("active");
      index++;
      dots[index].classList.add("active");
    } else {
      position = 0;
      dots[index].classList.remove("active");
      index = 0;
      dots[index].classList.add("active");
    }
    var css = {
      transform: `translateX(${position}px)`,
      transition: ` 0.3s ease-in-out`,
    };
    Object.assign(sliderInner.style, css);
  } else if (direction === -1) {
    if (position < 0) {
      position = position + item[0].clientWidth;
    }
    if (index > 0) {
      dots[index].classList.remove("active");
      index--;
      dots[index].classList.add("active");
    }
    var css = {
      transform: `translateX(${position}px)`,
      transition: ` 0.3s ease-in-out`,
    };
    Object.assign(sliderInner.style, css);

    //change dot position
    dots[index].classList.add("active");
  }

  console.log(index);
}
prev.addEventListener("click", function () {
  handleClick(-1);
});

next.addEventListener("click", function () {
  handleClick(1);
});

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    var css = {
      transform: `translateX(-${index * item[0].clientWidth}px)`,
      transition: ` 0.3s ease-in-out`,
    };
    var dotActive = document.querySelectorAll(".slide-dots .dot.active");
    console.log(dotActive);
    dotActive.forEach(function (dotActive) {
      dotActive.classList.remove("active");
    });
    dot.classList.add("active");

    Object.assign(sliderInner.style, css);
  });
});
