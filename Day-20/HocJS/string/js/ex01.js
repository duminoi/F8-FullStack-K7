/**
 Chuỗi bao gồm các ký tự được đặt trong dấu nháy 
 Chuỗi là kiểu dữ liệu nguyên thủy
 */
// var a = "học lập trình không khó";
// console.log(a);

// Kiểm tra 1 biến có phải kiểu chuỗi không? Dùng từ khóa typgeof

// if (typeof a === "string") {
//   console.log("Đây là chuỗi");
// }

// //Ép kiểu dữ liệu khác về chuỗi
// var b = 10;
// b = b + "";
// console.log(typeof b);

/*
 Các kiểu dữ liệu nguyên thủy sẽ bọc 1 đối tượng, trong đối tượng đó sẽ có hàm xử lý với kiểu dữ liệu tương ứng
 */

// console.log(String.prototype);

var str = "Học F8 lập trình tại F8";

// //1.length: Trả về độ dài chuỗi
// console.log(str.length);

// //2. charAt(): Trả về ký tự theo index(Bắt đầu từ 0)
// console.log(str.charAt(1));

// //3. charCodeAt(): Trả về mã ASCII của ký tự theo index
// console.log(str.charCodeAt());

//4. concat(): Nối chuỗi
// console.log(str.concat("A", "B", "C"));

//5. includes(): Tìm chuỗi con trong chuỗi cha (tìm thấy trả về true, ngược lại là false)
// console.log(str.includes("F8"));

//6. indexOf(): tìm chuỗi trong chuỗi cha, nếu tìm thấy trả về index đầu tiên tìm được, ngược lại trả về -1
// console.log(str.indexOf("F8"));

//7. lastIndexOf(): tìm chuỗi trong chuỗi cha, nếu tìm thấy trả về index cuối cùng tìm được, ngược lại trả về -1
// console.log(str.lastIndexOf("F8"));

//8. slice(start, end): Cắt chuỗi từ index đến end - 1
// console.log(str.slice(0, 3));
// console.log(str.slice(5));
// console.log(str.slice(-5));

//9. replace(tukhoa, thaythe): Thay thế từ khóa đầu tiên tìm được
// console.log(str.replace("F8", "F88"));

//10. replaceAll(tukhoa, thaythe):hay thế tất cả từ khóa tìm được
// console.log(str.replaceAll("F8", "F88"));

//11. split(): Tách chuỗi thành mảng dựa vào ký tự phân cách
// console.log(str.split(" "));

//12. startsWith(): Kiểm tra chuỗi bắt đầu
// var pathname = "/khoa-hoca/fullstack";
// console.log(pathname.startsWith("/khoa-hoc"));

//13. endsWith(): Kiểm tra chuỗi kết thúc
// var pathname = "/khoa-hoc/fullstack.html";
// console.log(pathname.endsWith(".html"));

//14. toLowerCase(): Chuyển về chữ thường

//15. toUpperCase(): Chuyền về chữ hoa

//16. trim(): Loại bỏ khoảng trắng đầu và cuối chuỗi
// var str = " Nguyễn Minh ";
// console.log(str);
// console.log(str.trim(str));

//17. trimStart(): Loại bỏ khoảng trắng ở đầu chuỗi

//18. trimEnd(): Loại bỏ khoảng trắng ở cuối chuỗi

//19. match(): Cắt chuỗi dựa vào biểu thức chính quy
var content = `hello anh em F8. Số điện thoại tôi là: 0378096074, thêm số nữa 0378096074`;
var pattern = /0\d{9}/g;
var phone = content.match(pattern);
console.log(phone);
