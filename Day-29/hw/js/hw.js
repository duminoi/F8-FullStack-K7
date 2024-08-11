document.addEventListener("DOMContentLoaded", function () {
  var prev = document.querySelector(".slide-nav .prev");
  var next = document.querySelector(".slide-nav .next");
  var items = document.querySelectorAll(".item img");
  var slideDots = document.querySelector(".slide-dots");
  var sliderInner = document.querySelector(".slide-inner");

  var position = 0;
  var index = 0;
  var initX = 0;
  var dragging = false;
  var itemWidth = items[0].clientWidth;

  // Tạo các dot
  items.forEach((_, i) => {
    var dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    slideDots.appendChild(dot);
  });

  var dots = document.querySelectorAll(".dot");

  function updateSlider() {
    sliderInner.style.transition = "transform 0.3s ease-in-out";
    sliderInner.style.transform = `translateX(${position}px)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function handleClick(direction) {
    if (direction === 1) {
      // Next
      if (index < items.length - 1) {
        index++;
      } else {
        index = 0;
      }
    } else if (direction === -1) {
      // Prev
      if (index > 0) {
        index--;
      } else {
        index = items.length - 1;
      }
    }
    position = -itemWidth * index;
    updateSlider();
  }

  prev.addEventListener("click", function () {
    handleClick(-1);
  });

  next.addEventListener("click", function () {
    handleClick(1);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", function () {
      index = i;
      position = -itemWidth * index;
      updateSlider();
    });
  });

  const swipeThreshold = 50;

  sliderInner.addEventListener("mousedown", function (e) {
    e.preventDefault();
    initX = e.clientX;
    dragging = true;
    sliderInner.style.transition = "none";
    sliderInner.addEventListener("mousemove", handleMove);
    sliderInner.addEventListener("mouseup", handleMouseUp);
    sliderInner.addEventListener("mouseleave", handleMouseUp);
  });

  function handleMove(e) {
    if (!dragging) return;
    const currentX = e.clientX;
    const diff = currentX - initX;
    position = -index * itemWidth + diff; // Tính toán vị trí tạm thời dựa trên diff
    sliderInner.style.transform = `translateX(${position}px)`;
  }

  function handleMouseUp(e) {
    if (!dragging) return;
    dragging = false;
    const swipeDistance = e.clientX - initX;

    if (swipeDistance < -swipeThreshold) {
      handleClick(1); // Swipe left to next slide
    } else if (swipeDistance > swipeThreshold) {
      handleClick(-1); // Swipe right to previous slide
    } else {
      updateSlider(); // Return to original position if swipe is not enough
    }

    sliderInner.removeEventListener("mousemove", handleMove);
    sliderInner.removeEventListener("mouseup", handleMouseUp);
    sliderInner.removeEventListener("mouseleave", handleMouseUp);
  }
});
