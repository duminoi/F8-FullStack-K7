//---------------------b1-----------------------

var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

var getError = function (field) {
  var string = ``;
  var subField = field.split(".");
  //   console.log(subField);
  for (var key in errors) {
    //nếu chỉ có một 1 trường
    if (field === key) {
      string = errors[key].required;
    }
    //nếu có 2 trường
    if (subField[0] === key) {
      for (var subKey in errors[key]) {
        //   console.log(key);
        if (subKey === subField[1]) {
          string = errors[key][subKey];
          //   console.log(subKey);
        }
      }
    }
  }
  return string;
};

// console.log(getError("email.required"));

var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  var input1 = document.getElementById("input1").value;
  //   console.log(input1);
  document.getElementById("result1").innerHTML = getError(`${input1}`);
});

//---------------------b1-----------------------

//---------------------b2-----------------------
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

var createCustomer = function (peo) {
  var peo = peo
    .sort(function (a, b) {
      if (b["age"] > a["age"]) {
        return -1;
      }
    })
    .map(function (value) {
      value.shortName = value.name.replace("Văn ", "");
      return value;
    });
  return peo;
};
console.log(`bai 2:`);
console.log(createCustomer(customers));

//---------------------b2-----------------------

//---------------------b3-----------------------
const data = [];
var register = function (name, password, email) {
  while (
    name == "" ||
    name == undefined ||
    password == undefined ||
    password == "" ||
    email == undefined ||
    email == ""
  ) {
    name = prompt("Nhập lại tên:");
    password = prompt("Nhập lại mật khẩu:");
    email = prompt("Nhập lại email:");
  }
  data.push({ name: name, password: password, email: email, role: "user" });

  return data;
};
const dataRegister1 = register("nguyen van a", "1234", "a@gmail.com");
const dataRegister2 = register("nguyen van b", "1234", "b@gmail.com");

var login = function (email, password) {
  var user = data.find(function (value) {
    if (value["email"] === email && value["password"] === password) {
      return true;
    }
  });
  if (user) {
    return user;
  } else {
    alert("Thông tin đăng nhập không hợp lệ");
  }
};
var dataLogin = login("b@gmail.com", "1234");
console.log("Bài 3");
console.log(data);
console.log(`login("b@gmail.com", "1234")`, dataLogin);

//---------------------b3-----------------------
