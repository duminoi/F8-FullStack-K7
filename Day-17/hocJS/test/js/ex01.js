const btn = document.getElementById("btn");
let number = document.getElementById("number");
let counter = parseInt(number.innerText);
// Lấy giá trị hiện tại của thẻ span dưới dạng số nguyên
btn.addEventListener("click", () => {
  setInterval(function () {
    ++counter;
    number.innerText = counter;
  }, 1000);
  // Sau mỗi 1000ms, thẻ span sẽ được cập nhật giá trị mới
});

// btn.addEventListener("click", () => {
//     var result = confirm("chúng ta có chắc chắn muốn xóa?");
//     if (result === true) {
//       alert("Người dùng đã chọn OK");
//     } else {
//       alert("Người dùng đã chọn Hủy bỏ");
//     }
//   });

// btn.addEventListener("click", () => {
//     alert("Xin chào

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   const age = prompt("Nhập tuổi của chúng ta:");
//   if (age < 18) {
//     alert("chúng ta chưa đủ tuổi để xem nội dung này!");
//   } else if (age >= 18 && age < 30) {
//     alert("chúng ta đã đủ tuổi để xem nội dung này!");
//   } else {
//     alert("chúng ta đã quá tuổi để xem nội dung này!");
//   }
// });
