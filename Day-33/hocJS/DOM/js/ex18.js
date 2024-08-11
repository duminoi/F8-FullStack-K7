//Class
class Person {
  name = `Đức Minh`;
  email = `dmin@gmail.com`;
  constructor() {
    console.log("Person Constructor");
  }
  getname() {
    return this.name;
  }
  get email() {
    return this.email;
  }
}

class User extends Person {
  constructor() {
    console.log("user Constructor");
    super(); //Bắt buộc phải có khi class con khởi tạo constructor
  }
  getInfo() {
    return `${this.name} - ${this.email}`;
  }
}
// var user = new User();
// console.log(user.getInfo());
// console.log(user.getname());

//Tạo ra class kế thừa từ HTMLElement
class HelloWolrd extends HTMLElement {
  constructor() {
    super();
  }
}

//Đăng ký class HelloWorld thành 1 thẻ html
customElements.define("hello-world", HelloWolrd);
// ==> Web Component
