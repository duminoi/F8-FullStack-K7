//Các bước định nghĩa sự kiện
/*
Bước 1: Xác định tên sự kiện
Bước 2: Xác định element có sự kiện đó
Bước 3: Xác định thời điểm gửi sự kiện (dispatch), có kèm theo dữ liệu ko?
Bước 4: Lắng nghe sự kiện(bước sủ dụng )
*/

// var finishedEvent = new Event("finish");

// var input = document.querySelector("input");

// input.addEventListener("input", function (e) {
//   var value = e.target.value;

//   if (+value === 100) {
//     console.log("Hoàn thành");
//     this.dispatchEvent(finishedEvent);
//   }
// });

// input.addEventListener("finish", function () {
//   console.log("đã xong");
// });

// var input2 = document.querySelector(`.input-2`);
// input2.addEventListener("finish", function (e) {
//   console.log("input2 hoàn thành", e);
//   console.log("Vị trí đầu tiên:", e.initRate);
// });
HTMLElement.prototype.change = function () {
  var changeEvent = new Event("change");
  this.dispatchEvent(changeEvent);
};
var quantity = document.querySelector(".quantity");
var minus = quantity.querySelector(".minus");
var plus = quantity.querySelector(".plus");
var input = quantity.querySelector("input");
var changeEvent = new Event("change");
console.dir(input);

plus.addEventListener("click", function () {
  input.value++;
  input.change();
});
minus.addEventListener("click", function () {
  input.value--;
  if (input.value < 1) {
    input.value = 1;
  }
  input.change();
});

input.addEventListener("change", function () {
  var value = this.value;
  console.log(value);
  console.log("hello");
});

//Trigger Event
/*
1.Dùng các hàm có sẵn:
- click()
- focus()
- submit()

2. Dùng dispatchEvent
*/
input.focus(); //dispatchEvent focus
setInterval(function () {
  //   plus.click(); //dispatchEvetn click
}, 500);
