/**
 Ký tự của biểu thức chính quy: /, ., [, ],+, ?, =,... ==> Muốn kiểm tra --> Thêm ký tự \(escape)
 
 Hoặc (|), phủ định (^)
 Các ký hiệu viết tắt khác:
\d ==> Đại diện cho số
\D ==> Không phải là số
\w ==> chữ thường, hoa ,số,_
\W ==> Ngược lại của \w
\s ==> Khoảng trắng
\S ==> Không phải là khoảng trắng
 */

// const phone = `0388875179`;
// const pattern = /^(0|\+84)[0-9]{9}$/;
// console.log(pattern.test(phone));

// const str =`Hoangan@!#$12345`
// const pattern = /[^a-zA-Z0-9]/

/* bài 1
kiểm tra username hợp lệ:
- Chỉ chấp nhận chữ thường, số, -, _
- Độ dài ký tự từ 5 ký tự trở lên
- Bắt đầu bằng chữ thường hoặc gạch dưới
*/
// const username = "minh123#";
// const pattern = /^([a-z_])[a-z0-9-_]{4,}$/;
// console.log(pattern.test(username));

/* bài 2
kiểm tra email hợp lệ
username@domain.ext
1. username
- Bắt đầu bằng chữ cái
- Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, . và số
- Tối thiểu 3 ký tự trở lên
2. Domain
- Bắt đầu bằng chữ cái
- Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, . và số
- Tối thiểu 1 ký tự

3. ext
- Chữ cái thường, HOA
- Tối thiểu 2 ký tự

Test:
hoangan.web-@gmail.com ==> failed
hoangan@fullstack-.edu.vn ==> failed

*/

// const tenMien = "ducminh.web@nodejs.fullstack.edu.vn";
// const pattern =
//   /^[a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]@([a-zA-Z]|[a-zA-Z0-9-_]*[a-zA-Z0-9])\.([a-zA-Z0-9-_]*[a-zA-Z0-9]\.)*[a-zA-Z]{2,}$/;
// console.log(pattern.test(tenMien));

//Cắt chuỗi
// const content = `Xin chao anh em, tôi la 0378096074 abc xtz 0123456788`;
// const pattern = /(0|\+84)\d{9}/g;
// const phone = content.match(pattern);
// console.log(phone);

//Capturing the Group: Kỹ thuật chụp lại 1 phần của biểu thức dể trả về kết quả. Thêm cặp ngoặc ()
// ==> Lưu ý: Không hỗ trợ với global
// const email = `ducminh.web@nodejs.fullstack.edu.vn`;
// const pattern =
//   /^([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9])@(?:[a-zA-Z]|[a-zA-Z0-9-_]*[a-zA-Z0-9])\.(?:[a-zA-Z0-9-_]*[a-zA-Z0-9]\.)*[a-zA-Z]{2,}$/;
// const result = email.match(pattern);
// console.log(result);

//lazy,greedy

//Thay thế
// const content =
//   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop dminhello@gmail.com packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

// const pattern =
//   /[a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]@([a-zA-Z]|[a-zA-Z0-9-_]*[a-zA-Z0-9])\.([a-zA-Z0-9-_]*[a-zA-Z0-9]\.)*[a-zA-Z]{2,}/g;

// const result = content.replace(
//   pattern,
//   `<a href="mailto:$1" title="Username:$1">$1</a>`
// );
// document.body.innerHTML = result;

// Đối sánh chuỗi: Chụp lại kết quả của biểu thức để đưa vào giá trị sau khi thay thế (Dựa vào capturing group)

// group 1 ==> $1
// group 2 ==> $2
// group 3 ==> $3
// group 4 ==> $4

let url = "http://fullstack.edu.vn////";
const pattern = /\/+$/g;
url = url.replace(pattern, "");
console.log(url);
