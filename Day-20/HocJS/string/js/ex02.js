var email = `duminoi2003@gmail.com`;
//Viết chương trình xử lý trả về username của email
// arr = email.split("@");
// console.log(arr[0]);
/**
 bước 1: tìm index của ký tự @ ==> Dùng hàm indexOf()
 bước 2: Cắt từ đầu đến index vừa tim được
 */
// var index = email.indexOf("@");
// var username = email.slice(0, index);
// console.log(username);

//Viết 1 hàm kiểm tra chuỗi có phải viết hoa hay không
//Cách 1
// function isUpper(str) {
//   arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j].charCodeAt(0) < 65 || arr[i][j].charCodeAt(0) > 90) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(isUpper("NGUYEN DUC MINH"));

//Cách 2
// function isUpper(str) {
//   return str === str.toUpperCase();
// }
// console.log(isUpper("NGUYEN DUC MINh"));
