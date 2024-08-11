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

console.dir(Array);

function Person(name, email) {
  this.name = name;
  this.email = email;
}
var object = {
  name: "Minh",
  mail: "dmin@gmail.com",
};

console.dir(object);

//DOM HTML
