//Các thao tác của DOM HTML
/*
- Lấy nội dung của thẻ html
- Thay đổi nội dung của thẻ html
- Xóa thẻ html
- Thêm, sửa, xóa thuộc tính trong thẻ html */

// var contentEl = document.querySelector(".content");

//1.innerHTML
// console.log(contentEl.innerHTML);
// contentEl.innerHTML = "<h2>Học JS không khó</h2>";

//2. innerText
// console.log(contentEl.innerText);
// contentEl.innerText = "<h2>Học JS không khó</h2>";

//3. textContent
// console.log(contentEl.textContent);
// contentEl.textContent = `<h2>Học JS không khó</h2>`;

//4. outerHTML
// console.log(contentEl.outerHTML);
// contentEl.outerHTML = "<h2>Học js không khó</h2>";

//5. outerText
// console.log(contentEl.outerText);
// contentEl.outerText = "<h2>Học js không khó</h2>";
// var btn = document.querySelector(".btn");
// var content = document.querySelector(".content");
// var initContent = content.innerHTML;
// btn.addEventListener("click", function () {
//   if (!content.innerText) {
//     content.innerHTML = initContent;
//     this.innerText = "ẩn";
//   } else {
//     content.innerText = "";
//     this.innerText = "hiện";
//   }
// });

var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");
var number = document.querySelector(".number");

plus.addEventListener("click", function () {
  number.innerText++;
});
minus.addEventListener("click", function () {
  number.innerHTML--;
});
