//Array, Object, function: Khi gán 1 biến bằng 1 array, object ==> Biến mới copy dịa chỉ của biến cũ ==> 2 biến cùng 1 dịa chỉ

//Copy array
// var oldArr = ["Đức Minh", "dminso1koaiso2@gmail.com"];
// var newArr = oldArr;

//Shallow Copy
// - Sử dụng các phương thức trả về mảng mới
// var newArr = oldArr.map(function (item) {
//   return item;
// });
// var newArr = oldArr.slice(0);
//- Spread Operator --> Học ở ES6
// var newArr = [...oldArr   ];

//Deep Copy
//- Sử dụng JSON: chuyển mảng thành json, chuyển ngược lại (json về mảng)
// var json = JSON.stringify(oldArr);
// var newArr = JSON.parse(json);
// newArr[0] = "Đức Minh F8";
// console.log(oldArr);
// console.log(newArr);

//Vì sao hiểu nhầm
// var users = ["item1", `item2`];
// function setdata(data) {
//   data[0] = "item3";
// }
// setdata(users);
// console.log(users);

// var message = "F8";
// function setMessage(data) {
//   data = data.replace("8", "9");
//   console.log(data);
// }
// setMessage(message);

// console.log(message);

//Đích = nguồn
//đích thay đổi --> nguồn thay đổi --> Kiểu dữ liệu tham chiếu

// var a = function () {
//   console.log("getA");
// };
// var b = a;
// var c = b;
// c();

var arr = [
  ["user1", "user1@gmail.com"],
  ["user2", "user2@gmail.com"],
  ["user3", "user3@gmail.com"],
];

//Thêm 1 phần tử vào mảng con nếu tìm thấy email = user2@gmail.com
// var arr = arr.map(function (item) {
//   if (item.includes("user2@gmail.com")) {
//     item.push("hello anh em");
//   }
//   return item;
// });
// console.log(arr);

// var result = [];
// arr.forEach(function (item) {
//   if (item.includes("user2@gmail.com")) {
//     result = item;
//   }
// });
// result.push("hello anh em");
// console.log(arr);

// var result = arr.find(function (item) {
//   return item.includes("user2@gmail.com");
// });
// result.push("hello anh em");
// console.log(result);
// console.log(arr);

// var arr = ["item1", "item2", "item3", "item4", "item5"];
// arr.length = 3; //getter, setter --> Học sau
// console.log(arr);

//Tạo 1 mảng mới có số lượng phần tử xác định
// var arr = Array(20);
// console.log(arr);
//Ví dụ: Tạo 1 mảng mới chứa các số tử 1 đến 20
//[1,2,3,4,5,6,7..., 20]
var newArr = Array.from(
  Array(20)
    .keys()
    .map(function (item) {
      //   console.log(item);
      return item + 1;
    })
);
console.log(newArr);

//Giải thích
//1.Array(number) --> trả về 1 mảng mới có số lượng phần tử number

//2. keys() --> Trả về các index của mảng
console.log(Array(20).keys());

//3. Array.from --> Ép kiểu về mảng
console.log(Array.from(Array(20).keys()));

function something() {
  console.log(arguments);
  //Array like Object --> Object giống mảng( có Length, có key là số)
  Array.from(arguments).forEach(function (item) {
    console.log(item);
  });
}
something(5, 10, 15, 20, 25);
