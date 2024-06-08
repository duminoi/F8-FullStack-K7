var prev = document.querySelector(".slide-nav .prev");
var next = document.querySelector(".slide-nav .next");
var item = document.querySelectorAll(".item img");

var slideDots = document.querySelector(".slide-dots");

var sliderInner = document.querySelector(".slide-inner");
var sliderInnerWidth = item[0].clientWidth * item.length;
var position = 0;
var index = 0;
var initX = 0;
var lastPosition = 0;
//create dot
for (let i = 0; i < item.length; i++) {
  var dot = document.createElement("div");
  dot.classList.add("dot");
  slideDots.appendChild(dot);
}
// active dot
var dots = document.querySelectorAll(".dot");

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

  console.log(position);
}
prev.addEventListener("click", function () {
  handleClick(-1);
});

next.addEventListener("click", function () {
  handleClick(1);
});
//press dot to swipe
dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    position = index * item[0].clientWidth;
    var css = {
      transform: `translateX(-${position}px)`,
      transition: ` 0.3s ease-in-out`,
    };
    var dotActive = document.querySelectorAll(".slide-dots .dot.active");
    console.log(dotActive);
    dotActive.forEach(function (dotActive) {
      dotActive.classList.remove("active");
    });
    dot.classList.add("active");

    Object.assign(sliderInner.style, css);
    lastPosition = position;
    console.log(position);
  });
});
var swipe;
function handleDown(e) {
  e.preventDefault();
  initX = e.clientX;
  console.log("initX", initX);
  sliderInner.addEventListener("mousemove", handleMove);
  sliderInner.addEventListener("mouseup", function () {
    if (swipe < 150) {
      sliderInner.style.transform = `translateX(-${lastPosition}px)`;
    }
    sliderInner.removeEventListener("mousemove", handleMove);
    lastPosition = position;
    console.log("lastPosit", lastPosition);
    sliderInner.style.cursor = "default";
  });
}

function handleMove(e) {
  swipe = initX - e.clientX;
  sliderInner.style.cursor = "move";
  sliderInner.style.transition = "transform 0.3s ease";
  if (swipe > 0) {
    if (swipe < 150) {
      position = lastPosition + swipe;
      // if(position <)
      sliderInner.style.transform = `translateX(-${position}px)`;
    } else {
      position = lastPosition + item[0].clientWidth;
      sliderInner.style.transform = `translateX(-${position}px)`;
      sliderInner.style.cursor = "default";
    }
  } else {
    position = lastPosition + swipe;

    sliderInner.style.transform = `translateX(-${position}px)`;
  }
  // lastPosition = position;
  console.log("initX", initX);
  console.log("e.offset", e.clientX);
  console.log("swipe", swipe);
  console.log("position", position);
}

sliderInner.addEventListener("mousedown", handleDown);
