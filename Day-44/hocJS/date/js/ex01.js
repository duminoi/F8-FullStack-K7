// console.log(Date.prototype);
//Thời gian dựa theo máy tính của client (Áp dụng với frontEnd)
// const today = new Date(); //Lấy thời gian hiện tại
// console.log(today);

// const date = new Date();
//Các phương thức trong nhóm get
// console.log(date.getDay()); //Lấy thứ (Tính từ 0 = Chủ nhật)
// console.log(date.getDate());
// console.log(date.getMonth()); //Bắt dầu từ 0
// console.log(date.getFullYear());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime()); // Số mili giây từ 1970 đến thời điểm được chọn
// Các phương thức set
// date.setDate(29);
// console.log(date);

const targetDate = "2024-7-31 09:30:30";

const dayEl = document.querySelector(".days span");
const hourEl = document.querySelector(".hours span");
const minuteEl = document.querySelector(".minutes span");
const secondEl = document.querySelector(".seconds span");
const handleCountdown = () => {
  const date1 = new Date();
  const date2 = new Date(targetDate);
  const miliTime = date2.getTime() - date1.getTime();
  let secondTime = miliTime / 1000;
  const days = Math.floor(secondTime / 86400);

  secondTime = secondTime - days * 86400;
  const hours = Math.floor(secondTime / 3600);
  secondTime = secondTime - hours * 3600;
  const minutes = Math.floor(secondTime / 60);
  secondTime = Math.floor(secondTime - minutes * 60);
  dayEl.innerHTML = days < 10 ? "0" + days : days;
  hourEl.innerHTML = hours < 10 ? "0" + hours : hours;
  minuteEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  secondEl.innerHTML = secondTime < 10 ? "0" + secondTime : secondTime;
};

setInterval(handleCountdown, 1000);
