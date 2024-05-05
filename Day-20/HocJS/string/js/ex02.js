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
//   for (let i = 0; i <= arr.length; i++) {
//     arr2 = arr[i].split("");
//     for (let j = 0; j <= arr2.length; j++) {
//       if (arr2[j].charCodeAt(0) < 65 && arr2[j].charCodeAt(0) > 90) {
//         console.log(arr2[j]);
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(isUpper("NGUYEN DUC MINh"));
// console.log(email.charCodeAt(0));

//Cách 2
// function isUpper(str) {
//   return str === str.toUpperCase();
// }
// console.log(isUpper("NGUYEN DUC MINh"));
