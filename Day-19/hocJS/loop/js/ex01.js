//Vòng lặp while: Lặp với số lần lặp không xác định trước
/**
 while (dieukien){
    Câu lệnh
 }
 */

// var i = 0;
// var s = 0;
// while (i <= 10) {
//   s += i;
//   i++;
// }
// console.log(s);

var n = 1024;
// Lấy n / 2, khi nào không chia hết thì dừng lại -->Trả về số lượng phép chia (số lần chạy)
var count = 0;
// while (n % 2 == 0) {
//   n /= 2;
//   count++;
// }
// console.log(count);

// Vòng lặp do while: Chạy với số lần lặp không xác định trước
var a = 10;
// while (a < 0) {
//   console.log(a);
// }

// do {
//   console.log(a);
// } while (a < 0);

//Từ khóa break --> Dừng vòng lặp tại thời điểm mong muốn (Không cần vòng lặp chạy xong)

//Từ khóa continue --> Bỏ qua lần lặp để chạy lần lặp tiếp theo
for (var i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
  //   if (i === 5) {
  //     break;
  //   }
}
