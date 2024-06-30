//Arrow function
// const getMessage = (msg) => {
//   console.log("học lập trình không khó");
// };

// getMessage("F8");

// //ko có ngoặc nhọn đồng nghĩa với return
// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// const name = "Đức Minh";
// const email = "dminso1koaiso2@gmail.com";
// const getUser = () => ({ name: name, email: email });
// console.log(getUser());

const users = [
  {
    id: 1,
    name: "user 1",
  },
  {
    id: 2,
    name: "user 2",
  },
  {
    id: 3,
    name: "user 3",
  },
];

// const getUser = (userId) => users.find((user) => user.id == userId);
// console.log(getUser(1));

// document.body.innerHTML = `${users
//   .map((user) => `<h3>${user.name}</h3>`)
//   .join("")}`;

/*
- Không nên dùng để làm method của object (Bởi vì không bind được this)
- Không được dùng để tạo Constructor 
- Không có object prototype
- Không bind được this, arguments

*/

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log(this);
// });

// const user = {
//   name: `Đức Minh`,
//   email: `dmin@gmail.com`,
//   getInfo: function () {
//     return {
//       age: `21`,
//       getAge: () => {
//         console.log(this);
//         return this.age;
//       },
//     };
//   },
// };
// console.log(user.getInfo().getAge());
