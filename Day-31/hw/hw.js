var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Bấm chuột xuống tại progress-bar ==> Chấm màu tím sẽ di chuyển tới vị trí vừa bấm

//Tính chiều rộng của progress-bar
var progressBarWidth = progressBar.clientWidth;
var offsetX = 0;
var initialClientX = 0;
var lastOffsetProgressBar = 0;
var offsetProgressBar = 0;
var currentTimeBar = 0;

var audio = document.querySelector(".audio");
var player = document.querySelector(".player");
var playerTimer = player.querySelector(".play-timer");
var playBtn = document.querySelector(".play-btn i");
var currentTimeEl = playerTimer.firstElementChild;
var durationEl = playerTimer.lastElementChild;
var duration = 0;
//Bấm chuột xuống tại progress-bar
progressBar.addEventListener("mousedown", function (e) {
  //Lấy được tọa độ tại vị trí bấm (offsetX)
  offsetX = e.offsetX;
  //Tính tỷ lệ phần trăm giữa tọa độ bấm xuống và chiều rộng
  var rate = (offsetX / progressBarWidth) * 100;
  //Cập nhật CSS vào progress
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX; //case bấm vào pregressBar không nhả mà kéo luôn
  offsetProgressBar = offsetX; //Bấm vào thanh progessBar nhả ra rồi mới kéo
  initialClientX = e.clientX; //case bấm vào pregressBar không nhả mà kéo luôn
  document.addEventListener("mousemove", handleDrag);
});

//bấm chuột xuống tại chấm tím
progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  initialClientX = e.clientX; //Gán vị trí của button màu tím so với body
  console.log(initialClientX);
  document.addEventListener("mousemove", handleDrag);
});
//sự kiện cập nhật chiều rộng cho thanh progress
var handleTimeUpdate = function () {
  var currentTime = audio.currentTime;
  currentTimeEl.innerHTML = getTimeFormat(currentTime);
  var rate = (currentTime / audio.duration) * 100;
  if (currentTime == audio.duration) {
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.addEventListener("click", function () {});
  }
  progress.style.width = `${rate}%`;
};
//Khi nhả chuột
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  lastOffsetProgressBar = offsetProgressBar;
  audio.currentTime = currentTimeBar;
  console.log(currentTimeBar);
});
//khi kéo chuột
var handleDrag = function (e) {
  var clientX = e.clientX;
  offsetProgressBar = clientX - initialClientX + lastOffsetProgressBar;
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  //xóa sự kiện timeupdate khi bắt đầu kéo trên thanh progressBar
  audio.removeEventListener("timeupdate", handleTimeUpdate);
  progress.style.width = rate + "%";
  currentTimeBar = (audio.duration * rate) / 100;
  audio.play();
  console.log("currentTimeBar", currentTimeBar);
};
// ------------------------------------------------Xử lý audio

var setDuration = function () {
  duration = audio.duration;
}; // lấy thời gian của audio
var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}; //format lại thời gian của audio
window.addEventListener("load", function (e) {
  //khi màn hình được load
  setDuration(); // khởi tạo thời gian audio
  console.log(getTimeFormat(duration));
  durationEl.innerHTML = getTimeFormat(duration);
  playBtn.addEventListener("click", function () {
    if (audio.paused) {
      //Nhạc đang dừng
      console.log("play");
      audio.play(); //Phát nhạc
    } else {
      //nhạc đang phát
      console.log("paused");
      audio.pause(); //Dừng nhạc
    }
  });
  audio.addEventListener("play", function () {
    playBtn.classList.replace("fa-play", "fa-pause");
  });
  audio.addEventListener("pause", function () {
    playBtn.classList.replace("fa-pause", "fa-play");
  });

  audio.addEventListener("timeupdate", handleTimeUpdate);
  //hover
  var before = document.querySelector(".before");
  progressBar.addEventListener("mouseover", function (e) {
    progressBar.addEventListener("mousemove", function (e) {
      backgroundWidth = e.offsetX;
      before.classList.add("show");
      before.style.left = `${backgroundWidth - 10}px`;
      var rate = (backgroundWidth / progressBarWidth) * 100;
      var currentTime = (audio.duration * rate) / 100;
      before.innerHTML = `${getTimeFormat(currentTime)}`;

      //Nhấn chuột xuống + click
      progressBar.addEventListener("mousedown", function () {
        audio.currentTime = currentTime;
        audio.play();
      });
      progressBar.addEventListener("click", function () {
        audio.currentTime = currentTime;
        audio.play();
      });
    });
    progressSpan.addEventListener("mousemove", function (e) {
      e.stopPropagation();
    });
    progressBar.addEventListener("mouseout", function () {
      before.classList.remove("show");
    });
  });
});
