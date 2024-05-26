var user = {
  name: "Đức Minh",
  email: "dminso1koaiso2@gmail.com",
  getInfo: function () {
    // var _this = this;
    return {
      age: 21,
      getName: function () {
        return this.name;
      },
    };
  },
};
// //hàm bind() để thay thay đổi this theo đối số truyền vào
// //ví dụ: getName.bind(user) thì lúc này trong hàm getName() --> this = user
var name = user.getInfo().getName.bind(user)();
// console.log(name);
//-------------------------------------------------------

function something(name, email) {
  console.log(name, email);
  console.log(this.courserName);
  console.log(this.coursePrice);
}

var obj = {
  courserName: "FullStack",
  coursePrice: 12000,
};
// something.call(obj, "Đức Minh", "dminso1koaiso2@gmail.com"); //Hàm call(object,.....đối số ban đầu) để truyền vào object mà không cần khai báo tham số hàm ban đầu

var arr = ["Đức Minh", "dmin@gmail.com"];
// something.apply(obj, arr);
// --------------------------------------------------------------

function Person() {
  //function contructor
  this.name = "Đức Minh";
  this.email = "dmin@gmail.com";
  this.getName = function () {
    return this.name;
  };
  this.getEmail = function () {
    return this.email;
  };
}

function User() {
  Person.call(this); //Truyền this của User vào Person -->có thể truy cập vào thuộc tính, phương thức của Person
  this.getInfo = function () {
    // console.log(this.getName());
    // console.log(this.getEmail());
  };
}

var user = new User();
user.getInfo();
// console.log(user.name);
// var user = new Person();
// console.log(user.getName());

//Về nhà tìm hiểu lại
/**
 1.Prototype

 2.Từ khóa this

 3.Function Constructor

 4.bind, call, apply

 5.Kế thừa Constructor
 */
