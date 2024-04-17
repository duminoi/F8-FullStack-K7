//Comment JS 1 dòng
/*  comment nhiều dòng
    comment nhiều dòng
    comment nhiều dòng
*/
// Khai báo biến (Đặt tên theo quy tắt camelCase)
var user;
var customer;
var userId, username, email, userEmail;
var course = "Fullstack Offline";
age = 32;

// Lưu ý: Nếu 1 biến được khai báo nhưng chưa gán giá trị --> Giá trị mặc định sẽ là undefined
console.log(user);
console.log(course);

// Hiển thị nội dung lên trình duyệt
// document.write("<h2>Hello anh em f8</h2>");

//Dùng DOM (học sau)
document.body.innerHTML = "Học JS không khó";

// Lưu ý: Nội dung hiển thị lên trình duyệt có thể là thẻ html
// document.write(course);
// var welcome = "<h2>KHóa học " + course + " tại F8 </h2>";
// document.write(welcome);
// Năm 2015, js có bổ sung cú pháp mới để thay thế dấu nháy đơn và nháy kép
// Backtick: ``
var welcome = `<h2>Khóa học ${course} tại F8</h2> 
<h3>Đức Minh</h3>`;
document.write(welcome);

//Lưu ý: Biến trong JS có 2 cách khai báo biến khác: let, const --> Học sau
