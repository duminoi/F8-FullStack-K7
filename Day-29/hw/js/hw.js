document.addEventListener("DOMContentLoaded", function () {
  var prev = document.querySelector(".slide-nav .prev");
  var next = document.querySelector(".slide-nav .next");
  var items = document.querySelectorAll(".item img");
  var slideDots = document.querySelector(".slide-dots");
  var sliderInner = document.querySelector(".slide-inner");

  var position = 0;
  var index = 0;
  var lastPosition = 0;

  var prevTranslate = 0;
  var itemWidth = items[0].clientWidth; // Đã thêm dòng này để lấy chiều rộng của mỗi mục

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
      if (Math.abs(position) < itemWidth * (items.length - 1)) {
        position -= itemWidth;
        index++;
      } else {
        position = 0;
        index = 0;
      }
    } else if (direction === -1) {
      if (position < 0) {
        position += itemWidth;
        index--;
      } else {
        position = -itemWidth * (items.length - 1);
        index = items.length - 1;
      }
    }
    updateSlider();
    prevTranslate = position;
  }

  prev.addEventListener("click", function () {
    handleClick(-1);
  });

  next.addEventListener("click", function () {
    handleClick(1);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", function () {
      position = -itemWidth * i;
      index = i;
      updateSlider();
      prevTranslate = position;
      lastPosition = position; // Thêm dòng này để cập nhật lastPosition
    });
  });

  const swipeThreshold = 50; // Ngưỡng vuốt, bạn có thể điều chỉnh

  // Thêm hiệu ứng chuyển động mượt mà bằng CSS
  sliderInner.style.transition = "transform 0.3s ease";

  sliderInner.addEventListener("mousedown", function (e) {
    e.preventDefault();
    initX = e.clientX; // Sử dụng clientX để theo dõi vị trí chuột toàn cầu
    sliderInner.addEventListener("mousemove", handleMove);
    sliderInner.addEventListener("mouseup", handleMouseUp);
    sliderInner.addEventListener("mouseleave", handleMouseUp); // Để xử lý trường hợp khi chuột rời khỏi thanh trượt
  });

  function handleMove(e) {
    const swipe = initX - e.clientX;
    position = lastPosition + swipe; // Điều chỉnh vị trí dựa trên khoảng cách vuốt
    sliderInner.style.transform = `translateX(-${position}px)`;
  }

  function handleMouseUp(e) {
    sliderInner.removeEventListener("mousemove", handleMove);
    sliderInner.removeEventListener("mouseup", handleMouseUp);
    sliderInner.removeEventListener("mouseleave", handleMouseUp);

    const swipeDistance = initX - e.clientX;

    // Xác định nếu vuốt đủ xa để chuyển sang phần tử tiếp theo
    if (swipeDistance > swipeThreshold) {
      // Nếu vuốt sang trái (phần tử tiếp theo)
      position = Math.min(
        lastPosition + itemWidth,
        itemWidth * (items.length - 1)
      );
    } else if (swipeDistance < -swipeThreshold) {
      // Nếu vuốt sang phải (phần tử trước đó)
      position = Math.max(lastPosition - itemWidth, 0);
    } else {
      position = lastPosition; // Quay lại vị trí ban đầu nếu vuốt không đủ xa
    }

    lastPosition = position;
    sliderInner.style.transform = `translateX(-${position}px)`;
  }
});
