// console.log(document);
// console.dir(document.body);
// console.dir(document.head);
// // console.dir(document.title);
// document.title = "Hello anh em F8";

//Tạo Element Node --> Truy cập vào thẻ HTML để trả về Object
// var title = document.getElementById("title");
// console.dir(title);

// var titleList = document.getElementsByClassName("title");
// console.log(titleList);

// var titleList = document.getElementsByTagName("h2"); //lấy theo tên thẻ
// console.log(titleList);

// var title = document.querySelector("#title");
// console.log(title);

var titleList = document.querySelectorAll("#title");
console.log(titleList);
Array.from(titleList).map(function (value) {
  console.log(value);
});

//DOM HTML
