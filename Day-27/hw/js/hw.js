var loginBtn = document.querySelector(".login-btn"); // chữ đăng nhập
var form = document.querySelectorAll("form"); //tất cả các form
var close = document.querySelectorAll(".close"); //nút đóng

var formLogin = document.querySelector("form.login"); //form login
var formRegis = document.querySelector("form.regis"); //form regis
var regisBtn = formLogin.querySelector(".regis-btn"); // nút regis trong form login
var logBtn = formRegis.querySelector(".log-btn"); //nút login trong form regis
var submit = document.querySelectorAll(".submit");
var overlay = document.querySelector(".overlay");
loginBtn.addEventListener("click", function () {
  formLogin.classList.add("show");
  overlay.classList.add("show");
}); //hiển thị over lay và form login khi bấm chữ đăng nhập

close.forEach(function (close) {
  close.addEventListener("click", function () {
    formLogin.classList.remove("show");
    formRegis.classList.remove("show");
    overlay.classList.remove("show");
  });
}); // bấm icon X tắt form
overlay.addEventListener("click", function () {
  formLogin.classList.remove("show");
  formRegis.classList.remove("show");
  overlay.classList.remove("show");
}); //bấm overlay tắt form

regisBtn.addEventListener("click", function (e) {
  e.preventDefault();
  formRegis.classList.add("show");
  formLogin.reset();

  var resetFocus = formLogin
    .querySelectorAll("input")
    .forEach(function (input) {
      input.classList.remove("focus");
    }); // reset focus

  var resetNotiInput = formLogin
    .querySelectorAll(".noti-input")
    .forEach(function (notiInput) {
      notiInput.classList.remove("show");
    }); // reset notiInput

  formLogin.classList.remove("show"); //tắt form login
}); // bấm nút đăng ký ở bên form login thì chuyển sang form regis, đông thời reset lại login

logBtn.addEventListener("click", function (e) {
  e.preventDefault();
  formLogin.classList.add("show");
  formRegis.reset();
  var resetFocus = formRegis
    .querySelectorAll("input")
    .forEach(function (input) {
      input.classList.remove("focus");
    }); // reset focus

  var resetNotiInput = formRegis
    .querySelectorAll(".noti-input")
    .forEach(function (notiInput) {
      notiInput.classList.remove("show");
    }); // reset notiInput
  formRegis.classList.remove("show");
}); // bấm nút đăng ký ở bên form login thì chuyển sang form regis, đông thời reset lại regis

var validateInput = function (input) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(input) ? true : false;
}; //xử lý validate

document.addEventListener("DOMContentLoaded", function () {
  var forms = document.querySelectorAll("form");

  var validateInput = function (input) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(input) ? true : false;
  };

  forms.forEach(function (form) {
    var inputs = form.querySelectorAll("input");
    var notiInputs = form.querySelectorAll(".noti-input");

    inputs.forEach(function (input, index) {
      input.addEventListener("input", function () {
        if (this.type === "email" && validateInput(input.value)) {
          input.classList.remove("focus");
          notiInputs[index].classList.remove("show");
        } else {
          inputs.forEach(function (input) {
            input.classList.add("focus");
          });
          notiInputs[index].innerHTML = "Vui lòng nhập đúng định dạng";
          notiInputs.forEach(function (notiInput) {
            notiInput.classList.add("show");
          });
        }
        if (this.type !== "email") {
          input.classList.remove("focus");
          notiInputs[index].classList.remove("show");
        }
      });

      input.addEventListener("blur", function () {
        if (this.type === "email") {
          inputs.forEach(function (input) {
            input.classList.add("focus");
          });
          notiInputs.forEach(function (notiInput) {
            notiInput.classList.add("show");
          });
        } else {
          var stop = false;
          if (this.value !== "") {
            input.classList.remove("focus");
            notiInputs[index].classList.remove("show");
            stop = true;
          } else {
            inputs.forEach(function (input) {
              input.classList.add("focus");
            });
            notiInputs.forEach(function (notiInput) {
              notiInput.classList.add("show");
            });
          }
          if (stop) return;
        }
      });
    });
  });
});
