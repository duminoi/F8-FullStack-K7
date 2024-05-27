console.dir(Object);

var user = {
  name: "Đức Minh",
  email: "dmin@gmail.com",
};
// console.log(user);

//Tạo ra đối tượng ko có Prototype
var user2 = Object.create(null);
user2.name = "Đức minh";
user2.email = "dmin@gmail.com";
// console.log(user2);

//Object.create còn có tác dụng kế thừa

//Tham chiếu
var a = {
  name: "Đức Minh",
  email: "dmin@gmail.com",
};

// var b = a;
//Shallow copy
// var b = Object.assign({}, a);
// var b = { ...a };

//Deep copy
// var b = JSON.parse(JSON.stringify(a));
// b.name = "Đức Minh F8";
// console.log(`b`, b);
// console.log(`a:`, a);

var users = [
  {
    name: "User 1",
    email: "user1@gmail.com",
  },
  {
    name: "User 2",
    email: "user2@gmail.com",
  },
  {
    name: "User 3",
    email: "user3@gmail.com",
  },
  {
    name: "User 4",
    email: "user4@gmail.com",
  },
];
var email = "user2@gmail.com";
//Yêu cầu : tìm user có email trên và sửa tên
//ứng dụng của tham chiếu

var user = users.find(function (user) {
  return user.email === email;
});
user.name = "User 2 Update";

document.write(` <table width="100%" border="1">
<thead>
  <tr>
    <th width="5%">STT</th>
    <th>Tên</th>
    <th>Email</th>
  </tr>
</thead>
<tbody>
   ${users
     .map(function (value, index) {
       return `<tr>
        <td>${index + 1}</td>
        <td>${value.name}</td>
        <td>${value.email}</td>

    </tr>`;
     })
     .join(" ")}
</tbody>
</table>`);

/**
 1. String
 2. Number
 3. BigInt
 4. Boolean
 5. Symbol
 6. undefined
 7. null
 8. Object
 */
// var type = users
//   .map(function (value) {
//     return value.name;
//   })
//   .join("");
// console.log(type);
