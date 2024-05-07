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

//Cách 2
var text = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. A molestiae
reiciendis laudantium error veritatis cupiditate sint blanditiis fugit
quidem ratione! `;
var interval;
var currentIndex = 0; // Index của từ hiện tại

function changeColor() {
  // Tìm vị trí của từ hiện tại trong văn bản
  var startIndex = text.indexOf(" ", currentIndex); // Tìm từng dấu cách từ vị trí hiện tại
  var endIndex = text.indexOf(" ", startIndex + 1); // Tìm từng dấu cách từ vị trí bắt đầu của từ tiếp theo
  if (endIndex === -1) {
    // Nếu không tìm thấy dấu cách tiếp theo, đó có thể là từ cuối cùng
    endIndex = text.length; // Kết thúc từ cuối cùng là vị trí cuối cùng của văn bản
  }
  // Lấy từ hiện tại
  var currentWord = text.substring(startIndex + 1, endIndex);
  // Tạo chuỗi kết quả với từ hiện tại được đánh dấu màu đỏ
  var output =
    text.substring(0, startIndex + 1) +
    `<span style="color:red">${currentWord}</span>` +
    text.substring(endIndex);

  // Hiển thị kết quả
  document.body.innerHTML = output;

  currentIndex = endIndex; // Cập nhật chỉ mục của từ hiện tại

  // Nếu đã duyệt qua tất cả các từ, reset lại currentIndex để bắt đầu lại từ đầu
  if (currentIndex === text.length) {
    currentIndex = 0;
  }
}

// Bắt đầu thay đổi màu từng từ sau mỗi 0.5s
interval = setInterval(changeColor, 500);
