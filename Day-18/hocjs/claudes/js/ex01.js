/*
Câu lệnh rẽ nhánh: Thực thi đoạn chương trình theo điều kiện nhất định
Điều kiện: Dùng biểu thức logic (Boolean)

Trong lập trình có 2 câu lệnh rẽ nhánh:

1. if else

1.1 Câu lệnh if thiếu
if (dieukien) {
    Code
}

1.2 Câu lệnh if đủ
if (dieukien) {
    Code đúng
} else {
    Code sai
}

1.3. Câu lệnh if nhiều nhánh
if (dieukien1){
    Code nhánh 1
} else if(dieukien2){
    Code nhánh 2
} else if(dieukien){
    Code nhánh 3
} else {
    Code nhánh 4
}

1.4. Câu lệnh if lồng nhau
if (dieukien1){
    if (dieukien2) {
        Code đúng dieukien2
    } else {
        Code sai dieukien2
    }
} else {
    Code sai dieukien1
}
2.switch case
*/

// var number = 15;
// if (number < 0) {
//   console.log("Số siêu nhỏ");
// } else if (number >= 0 && number < 5) {
//   console.log("Số nhỏ");
// } else if (number >= 5 && number < 10) {
//   console.log("Số trung bình");
// } else if (number >= 10 && number < 15) {
//   console.log("Số lớn");
// } else {
//   console.log("Số siêu lớn");
// }

//Bài tập: Tính lương thực nhận của 1 nhân viên sau khi đã trừ thuế
// Quy ước
// - Lương <= 5tr --> Thuế 0%
// - Lương > 5tr và < 15tr --> Thuế 3%
// - >= 15tr --> Thuế 5%

var salary = 7000000;
var income = 0,
  tax;
if (salary <= 5000000) {
  income = salary;
} else if (salary > 5000000 && salary < 15000000) {
  tax = 3;
} else {
  tax = 5;
}
income = salary - (salary * tax) / 100;
console.log(income);

var saleRate = 5;
var salePrice = 1000000;
//tìm giá gốc
// salePrice = regularPrice - (regularPrice * saleRate) / 100;
// regularPrice = salePrice + (salePrice * saleRate) / 100;
// var regularPrice = salePrice + (salePrice * saleRate) / 100;
// console.log(regularPrice);
// var regularPrice = (100 * salePrice) / (100 - saleRate);
// console.log(regularPrice);
// var seconds = 350;
// //Tìm xem có bao nhiêu phút, bao nhiêu giây
// // Gợi ý: math.floor() --> Làm tròn xuống và chỉ lấy phần nguyên
// var mins = Math.floor(seconds / 60);
// seconds -= mins * 60;
// console.log(mins, seconds);

//Câu lệnh switch case
/*
- Áp dụng khi có nhiều nhánh
- Có nhiều điều kiện hoặc ( || )
- Biểu thức logic là so sánh bằng ( === )
 */

var action = "update";
// switch (action) {
//   case "add":
//   case "create":
//   case "insert":
//     console.log("Thêm");
//     break;
//   case "update":
//   case "edit":
//     console.log("cập nhật");
//     break;
//   case "delete":
//   case "destroy":
//   case "remove":
//     console.log(xóa);
//     break;
//   default:
//     console.log("danh sách");
//     break;
// }

if (action === "add" || action === "create" || action === "insert") {
  console.log("thêm");
} else if (action === "update" || action === "edit") {
  console.log("cập nhật");
} else if (action === "delete" || action === "destroy" || action === "remove") {
  console.log("xóa");
} else {
  console.log("danh sách");
}

/*
Viết chương trình hiển thị số ngày trong 1 tháng cho trước
Input:
month = 11;
Output:
Tháng 11 có 30 ngày

Quy ước :
Tháng có 31 ngày : 1, 3, 5, 7, 8, 10, 12
tháng có 30 ngày: 4, 6, 9, 11
Tháng có 28 hoặc 29 ngày: 2
Lưu ý: Kiểm tra điều kiện của tháng
- số nguyên
- từ 1 đến 12
*/

var month = 1.5;
if (month % 1 === 0 && month >= 1 && month <= 12) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log(`Tháng ${month} có 31 ngày`);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(`tháng ${month} có 30 ngày`);
      break;
    case 2:
      console.log(`Thang ${month} có 28 hoặc 29 ngày`);
      break;
  }
} else {
  console.log("Nhập sai tháng");
}
