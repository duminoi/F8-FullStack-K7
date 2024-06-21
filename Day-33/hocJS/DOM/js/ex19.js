/*
Web Component: Chia nhỏ các thành phần trang web thành các thẻ html riêng biệt, dễ dàn tái sử dụng
- header
- footer
- product

Khi nào các bạn cần tách web component
- Sử dụng ở nhiều nơi
- Linh hoạt (Chỉ cần gọi là chạy)
- Logic, giao diện phức tạp

Các bước định nghĩa Component
- Xây dựng class tương ứng (Kế thừa từ HTMLElement)
- Xác định logic cần có trong component
- Đăng ký thẻ html (Lưu ý: Tên thẻ phải có 2 từ và nối bằng gạch ngang)

Lifecyle Callback
- Vòng đời khi 1 component được tạo ra đến khi nó bị loại bỏ khỏi DOM
- 3 giai đoạn:
+ Khởi tạo
+ Cập Nhật
+ Loại bỏ

Khi làm việc với web component ==> giải quyết được vấn đề css(Scope Stylesheet) ==> SHADOW DOM
*/

class ToDoApp extends HTMLElement {
  //   static observedAttributes = ["data-count"];
  constructor() {
    // Always call super first in constructor
    super();
  }
  connectedCallback() {
    console.log(this);
    this.render();
    this.addEvent();
  }
  render() {
    this.innerHTML = `
    <h1>Todo App</h1>
    <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
    </ul>
    <form>
        <input type="text" placeholder="Name..." id=""/>
        <button type="submit">Add</button>
    </form>
    `;
  }

  addEvent() {
    var form = this.querySelector("form");
    var _this = this;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      _this.handleAddTodo(e.target);
    });
  }
  handleAddTodo(event) {
    var nameEl = event.querySelector("input");
    var name = nameEl.value;
    var ul = this.querySelector("ul");
  }
  //   disconnectedCallback() {
  //     console.log("Component bị loại bỏ khỏi DOM");
  //   }
  //   attributeChangedCallback(name, oldValue, newValue) {
  //     console.log(
  //       `Thay đổi thuộc tính ${name}, giá trị cũ : ${oldValue},giá trị mới: ${newValue}`
  //     );
  //   }
}
customElements.define("todo-app", ToDoApp);

// var btn = document.querySelector(".btn");
// var ToDoAppEl = document.querySelector("todo-app");
// btn.addEventListener("click", function () {
//   //   ToDoAppEl.remove();
//   //   ToDoAppEl.dataset.count = 10;
// });
