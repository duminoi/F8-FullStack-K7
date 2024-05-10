//Khai báo mảng
var myArray = [1, 5, 3, "Hello F8", true, false, null, undefined];
// console.log(myArray);

//Kiểm tra số lượng phần tử
// console.log(myArray.length);

//Kiểm tra 1 biến có phải là mảng không?
// if (Array.isArray(myArray)) {
//   console.log("Đây là mảng");
// } else {
//   console.log("Đây không phải là mảng");
// }

//Thêm phần tử mới
//Cú pháp: tenbienmang[indexmoi] = giatri
myArray[myArray.length] = "Minh";
myArray[myArray.length] = "Nam";

//Sửa phần tử ==> Xác định được index
myArray[3] = "Hello F88";

//Duyệt mảng (Đọc mảng)
// console.log(myArray[0]);
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

//Vòng for in --> trả về index
// for (var index in myArray) {
//   console.log(index, myArray[index]);
// }

//Vòng for of --> trả về value
// for (var value of myArray) {
//   console.log(value);
// }

//Xóa phần từ trong mảng ==> Xác định index
// var deleteIndex = 3;
// var newArr = [];
// for (var index in myArray) {
//   if (+index === +deleteIndex) {
//     continue;
//   }
//   newArr[newArr.length] = myArray[index];
// }
// myArray = newArr;
// console.log(myArray);

//Bài tập: Thêm 1 phần tử bất kỳ vào đầu mảng
// var newValue = "JS";
//cách 1
// var newArr = [newValue];
// for (var value of myArray) {
//   newArr[newArr.length] = value;
// }
// console.log(newArr);
//Cách 2
// for (let i = 0; i < myArray.length - 1; i++) {
//   if (i === 0) {
//     newArr[i] = newValue;
//   } else {
//     newArr[i + 1] = myArray[i];
//   }
// }
// myArray = newArr;
// console.log(myArray);

//Baì tập: loại bỏ phần tử có chứa keyword trong mảng
// var user = [
//   "Nguyễn Đúc Minh",
//   "Tạ Hoàng An",
//   "Nguyễn Văn Dũng",
//   "Phạm Văn Hiếu",
// ];

// var keyword = "an";
// var newArr = [];
// for (var i = 0; i < user.length; i++) {
//   var position = user[i].toLowerCase().indexOf(keyword);
//   if (position !== -1) {
//     continue;
//   }
//   newArr[newArr.length] = user[i];
// }
// user = newArr;
// console.log(user);

// var numbers = [5, 2, 10, 9, 1, 4, 6];
// //Yêu cầu: Tìm phần tử lớn nhất trong mảng và đổi chỗ phần tử đó với phần tử đầu tiên
// // var max;
// // for (let i = 0; i < numbers.length; i++) {
// //   max = numbers[i];
// //   var temp;
// //   if (numbers[i + 1] > max) {
// //     max = numbers[i + 1];
// //     // console.log(max);
// //     // temp = numbers[0];
// //     // numbers[0] = numbers[i + 1];
// //     // numbers[i + 1] = temp;
// //   }
// //   break;
// // }
// // console.log(numbers);

// var maxIndex;
// var max = numbers[0];
// for (var index in numbers) {
//   if (max < numbers[index]) {
//     max = numbers[index];
//     maxIndex = +index;
//   }
// }
// console.log(max);
// console.log(maxIndex);
// var tmp = numbers[0];
// numbers[0] = max;
// numbers[maxIndex] = tmp;
// console.log(numbers);

// var fullname = "nguyễn đức minh";
//yêu cầu: chuyển thành họ tên hợp lệ: Nguyến Đức Minh
// var arr = fullname.split(" ");
// var newArr = [];
// var str;
// for (var i = 0; i < arr.length; i++) {
//   arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// }
// str = arr.join(" ");

// console.log(str);
