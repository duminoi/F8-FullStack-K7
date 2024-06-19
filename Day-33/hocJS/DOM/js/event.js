var inputList = document.querySelectorAll(`input[type="range"]`);
var finishedEvent = new Event("finish");
inputList.forEach(function (input) {
  input.addEventListener("mousedown", function (e) {
    var initRate = (e.offsetX * 100) / this.clientWidth;
    initRate = Math.round(initRate);
    finishedEvent.initRate = initRate;
    console.log(initRate);
  });

  input.addEventListener("input", function (e) {
    var value = e.target.value;
    if (+value === 100) {
      this.dispatchEvent(finishedEvent);
    }
  });
});

//Dispatch ==> Element ==> Listener

//Đăng ký tài khoản
/*
- Gửi email kích hoạt
- Gửi thông báo cho quản trị
- Gửi email cho quản trị

handleRegister(){
    //Xử lý đăng ký
    //Kiểm tra xem đăng ký thành công hay không?
    //dispatchEvent: Registered
    sendEmailActive();
    sendNotificationToAdmin();
    sendEmailtoAdmin();
}

File khác:
Listen Event Registered
sendEmailActive();
sendNotificationToAdmin();
sendEmailToAdmin();
********************************************
Tính năng thanh toán
- thêm sản phẩm vào giỏ hàng ==> Dispatch Event
- Vào trang thanh toán ==> Dispatch Event
- Submit form thanh toán ==> Dispatch Event
- Thực hiện thành công ==> Dispatch Event
- Thanh toán thất bai ==> Dispatch Event


====> Hiểu đơn giản là gọi hàm ở file khác, lan tỏa sự kiện ra các file
*/
