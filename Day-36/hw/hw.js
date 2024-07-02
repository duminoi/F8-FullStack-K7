const btn = document.querySelector(".action .btn");
const counter = document.querySelector(".counter");
btn.addEventListener("click", function () {
  window.location.href = "https://fullstack.edu.vn/";
});
btn.setAttribute("disabled", ``);

let countDownTime = 29;
let time = new Date();
let startTime = time.getSeconds();

let endTime = startTime + countDownTime;

function getlink() {
  let currentTime = new Date().getSeconds();
  let remaintime = endTime - currentTime;
  console.log(remaintime);
  if (remaintime >= 0) {
    counter.innerHTML = `${remaintime}`;
    if (remaintime == 0) {
      btn.removeAttribute(`disabled`);
    }
  }
  if (remaintime > 0) {
    requestAnimationFrame(getlink);
  } else {
    return 0;
  }
}
getlink();
