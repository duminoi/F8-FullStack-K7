// var text = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. A molestiae
// reiciendis laudantium error veritatis cupiditate sint blanditiis fugit
// quidem ratione! `;
// var interval;
// var words = text.split(/\s+/); // Chia đoạn văn bản thành từng từ
// var currentIndex = 0; // Index của từ hiện tại

// function changeColor() {
//   // Hiển thị từ hiện tại với màu đỏ
//   var currentWord = `<span style="color:red">${words[currentIndex]}</span>`;
//   // Tạo chuỗi kết quả bằng cách nối từng từ với khoảng trắng
//   var output = words.slice(0, currentIndex).join(" ") + " " + currentWord + " ";
//   // Nếu từ hiện tại không phải từ cuối cùng, nối thêm các từ còn lại vào chuỗi kết quả
//   if (currentIndex < words.length - 1) {
//     output += words.slice(currentIndex + 1).join(" ");
//   }
//   // Hiển thị kết quả
//   document.body.innerHTML = output;

//   currentIndex++; // Chuyển sang từ tiếp theo
//   // Nếu đã duyệt qua tất cả các từ, reset lại currentIndex để bắt đầu lại từ đầu
//   if (currentIndex === words.length) {
//     currentIndex = 0;
//   }
// }

// // Bắt đầu thay đổi màu từng từ sau mỗi 0.5s
// interval = setInterval(changeColor, 500);
