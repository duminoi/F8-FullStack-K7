const boldBtn = document.querySelector("#bold-btn");
const underlineBtn = document.querySelector("#underline-btn");
const italicBtn = document.querySelector("#italic-btn");
const colorBtn = document.querySelector("#color-btn");
let content = document.querySelector("#content");
let characterSpan = document.querySelector("#characterSpan");
let wordSpan = document.querySelector("#wordSpan");
let dropdowToggle = document.querySelector(".dropdown-toggle");
let menu = document.querySelector(".controls .menu");
let btnType = document.querySelectorAll(".menu button:not(#new-btn)");
let fileNameInput = document.querySelector("#filename-input");
let newBtn = document.querySelector("#new-btn");
let txtBtn = document.querySelector("#txt-btn");
//xử lý text
function handleBold() {
  document.execCommand("bold");
}

function handleUnder() {
  document.execCommand("underline");
}

function handleItalic() {
  document.execCommand("italic");
}
function handleColor(color) {
  document.execCommand("foreColor", false, color);
}
function finalValue(value) {
  fileNameInput.value = value;
}

function generatePDF() {
  var opt = {
    margin: 1,
    filename: `${fileNameInput.value}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(content).save();
}
var total = ``;
content.addEventListener("input", function () {
  total = content.innerText;

  var character = total.split(``).filter(function (item) {
    if (item.trim() !== "") {
      return true;
    }
  });

  var word = total.split(` `).filter(function (item) {
    if (item.trim() !== "") {
      return true;
    }
  });
  characterSpan.innerText = ` Số ký tự: ${character.length}`;
  wordSpan.innerText = ` Số từ: ${word.length}`;
});
//dropdow menu
dropdowToggle.addEventListener("click", function () {
  if (menu.style.display == `none` || menu.style.display === "") {
    menu.style.display = `block`;
  } else {
    menu.style.display = `none`;
  }
});

//Xuat file
txtBtn.addEventListener("click", function () {
  const blob = new Blob([content.innerText], {
    type: txtBtn.getAttribute("data-type"),
  });
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileNameInput.value;
  link.href = fileUrl;
  link.click();
});

newBtn.addEventListener("click", function () {
  console.log("vao day");
  content.innerText = "";
  characterSpan.innerText = `Số ký tự: 0`;
  wordSpan.innerText = `Số từ: 0`;
});
