//Destructuring (Array, object)
// Phá vỡ cấu trúc array, object để truy cập vào các key và lưu vào các biến riêng biệt

// const user = {
//   username: "Đức Minh",
//   email: "dmin2003@gmail.com",
//   password: "123456",
//   age: 32,
// };
// // const { username, email: userEmail, age = 20 } = user;
// // console.log(username, userEmail);
// // console.log(age);

// const { username, email, ...rest } = user;
// console.log(rest);

// const users = [
//   `Dức Minh`,
//   "dmin2003@gmail.com",
//   32,
//   `Hà Nội`,
//   { displayname: `Đức Minh F8` },
// ];
// // const [username, email, _age, address] = users;
// // console.log(username);
// // console.log(email);
// // console.log(address);

// // const [username, email, ...rest] = users;
// // console.log(rest);
// const [, , , , { displayname }] = users;
// console.log(displayname);

// const output = {
//   displayname: "Đức Minh F8",
//   emails: [
//     {
//       email: `dmin@gmail.com`,
//     },
//   ],
// };

// const {
//   displayname,
//   emails: [{ email }],
// } = output;
// console.log(email);

const users = [
  {
    id: 1,
    name: `Đức Minh 1`,
  },
  {
    id: 2,
    name: `Đức Minh 2`,
  },
  {
    id: 3,
    name: `Đức Minh 3`,
  },
];

users.forEach(({ name }) => {
  console.log(name);
});
