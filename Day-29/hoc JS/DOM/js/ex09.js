// DOM Navigation
/*
Chọn các element theo phân cấp: cha, con, ngang hàng (trước, sau)
- parentElement
- children
- nextElementSibling
- previousElementSibling
*/

// var firsta = document.querySelectorAll(".menu > li > a");
// // console.log(firsta);
// firsta.forEach(function (a) {
//   if (a.nextElementSibling) {
//     a.nextElementSibling.classList.add("hide");
//     a.value = `<div class="icon-wrapper">
//     <i class="fa-solid fa-angle-down"></i>
//     <i class="fa-solid fa-angle-up"></i>
//   </div>`;
//     a.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (a.nextElementSibling.classList == "hide") {
//         a.nextElementSibling.classList.add("show");
//         a.nextElementSibling.classList.remove("hide");
//       } else {
//         if (a.nextElementSibling.classList == "show") {
//           a.nextElementSibling.classList.add("hide");
//           a.nextElementSibling.classList.remove("show");
//         }
//       }
//     });
//   }
// });

var menuLinkList = document.querySelectorAll("a");
menuLinkList.forEach(function (menulink) {
  var submenu = menulink.nextElementSibling;
  if (submenu) {
    menulink.parentElement.classList.add("has-children");
  }
  menulink.addEventListener("click", function () {
    // e.preventDefault();
    //Lấy menu active của lần mở trước
    var menuItemActive = document.querySelector(".menu li.active");
    //Thêm menu active của lần mở hiện tại
    menulink.parentElement.classList.toggle("active");
    //Xóa menu active của lần mở trước
    if (menuItemActive) {
      menuItemActive.classList.remove("active");
    }
  });
});
