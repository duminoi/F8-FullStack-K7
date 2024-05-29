//Làm việc với thuộc tính
//element.tenthuoctinh
//element.tenthuoctinh = giatri

// ==> Chỉ hoạt động với các thuộc tính hợp lệ trong thẻ html tương ứng
var a = document.querySelector("a");
// console.log(a);
// console.log(a.href);
// console.log(a.target);
// console.log(a.title);
// console.log(a.id);
// console.log(a.className);

// a.href = "https://f8.edu.vn";
// a.className = "nav-link";
// a.target = "_self";

// getAttribute(tenthuoctinh)
// setAttribute(tenthuoctinh, giatri)
// console.log(a.getAttribute("width"));
// a.setAttribute("height", 200);

//Data Attribute(thuộc tính custom để xử lý js)
//Cú pháp: data-*

// var width = a.getAttribute("data-width");
// console.log(width);
// console.log(a);
// a.setAttribute("data-heigth", 200);

//Dataset: Object có sẵn trong Element Node giúp thao tác với Data Attribute dưới dạng Object
var width = a.dataset.width;
// console.log(width);
a.dataset.height = 200;

delete a.dataset.width;

//Thêm thuộc tính data-animtion-duration = 2 (sử dụng dataset)
a.dataset.animationDuration = 2; //data-animtion-duration
a.dataset.animationTimingFunction = "ease"; // data-animation-timing-function

//xóa thuộc tính
a.removeAttribute("id");
a.removeAttribute("class");

//Xóa thẻ html
a.remove();

//Classlist
var contentEl = document.querySelector(".content");
console.log(contentEl.classList);

contentEl.classList.add("content-1", "content-2", "content-3", "content-4");
contentEl.classList.remove("content-2");
contentEl.classList.replace("content-1", "content-2");
console.log(contentEl.classList.contains("content-3"));
contentEl.classList.toggle("item");
contentEl.classList.toggle("item");
