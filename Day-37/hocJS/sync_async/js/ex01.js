// alert("Học lập trình không khó");
// confirm("Chắc chưa");
// console.log("Ok chưa");
// console.log("Step 1");
// console.log("Step 2");
// setTimeout(() => {
//   console.log(`Bắt đầu...`);
// }, 0);
// console.log("Step 3");
// console.log("Step 4");
// console.log(` học JS không khó`);

//ES6 ==> Promise
//Callback ==> Callback Hell
//Promise ==> Vẫn tồn tại callback nhưng sẽ viết dưới dạng Chaining
//object.method1().method2().method3();

//Các trạng thái của Promise
// - pending
// - fulfilled
// - rejected

//Để làm việc với Promise có 2 bước
// - 1. Khởi tạo object promise và đưa dữ liệu vào Promise
// - 2. Gọi Promise và trả về kết quả

// const getA = (callback) => {
//   setTimeout(() => {
//     const user = {
//       name: "Đức Minh",
//       email: `dmin@gmail.com`,
//     };
//     callback(user);
//   }, 3000);
// };

// const getB = (callback) => {
//   setTimeout(() => {
//     const user = {
//       name: "Fullstack offline",
//     };
//     callback(user);
//   }, 1000);
// };

// getA((data) => {
//   console.log(data);
//   getB((data) => {
//     console.log(data);
//   });
// });

// const getA = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const user = {
//         name: "Đức Minh",
//         email: `dmin@gmail.com`,
//       };
//       //Nếu dữ liệu trả về thành công ==> gọi hàm resolve để trả về
//       //Nếu thất bại ==> gọi hàm reject để trả về lỗi
//       resolve(user);
//       //   rejected("lỗi rồi");
//     }, 3000);
//   });
// };

// getA()
//   .then((data) => {
//     console.log(data);
//     return `A`;
//   })
//   .then((data) => {
//     console.log(data);
//     return `B`;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("xong rồi");
//   });

// console.log(
//   getA().then((data) => {
//     console.log(data);
//     return `A`;
//   })
// );

// const getB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const course = {
//         name: "Đức Minh F8 offline",
//       };
//       //Nếu dữ liệu trả về thành công ==> gọi hàm resolve để trả về
//       //Nếu thất bại ==> gọi hàm reject để trả về lỗi
//       resolve(course);
//       //   rejected("lỗi rồi");
//     }, 3000);
//   });
// };

// getA()
//   .then((dataA) => {
//     console.log(dataA);
//     return getB();
//   })
//   .then((dataB) => {
//     console.log(dataB);
//   });

const getUser = (userId) => {
  const users = [
    {
      id: 1,
      name: "user 1",
      salary: 1000,
    },
    {
      id: 2,
      name: "user 2",
      salary: 2000,
    },
    {
      id: 3,
      name: "user 3",
      salary: 3000,
    },
    {
      id: 4,
      name: "user 4",
      salary: 4000,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(({ id }) => userId === id);
      resolve(user);
    }, 1000);
  });
};
// getUser(1).then((data) => {
//   console.log(data.salary);
// });
const ids = [1, 3, 4];
//Yêu cầu: Tính tổng thu nhập của 3 user trên
//Lưu ý: Không cùng async await, Promise.all
// let finalTotal = 0;

// const getTotal = () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     let totalPromise = getUser(ids[i]).then((data) => {
//       total += data.salary;
//       return total;
//     });
//     if (i === ids.length - 1) {
//       return totalPromise;
//     }
//   }
// };

// getTotal().then((data) => {
//   console.log(data);
// });

//Promise.all() ==> Thực thi nhiều promise cùng 1 lúc và trả về 1 mảng mới chưa các dư liệu đã được resolve
// const promiseArr = ids.map((id) => getUser(id));
// Promise.all(promiseArr).then((users) => {
//   const total = users.reduce((total, user) => {
//     return total + user.salary;
//   }, 0);
//   console.log(total);
// });

//Promise.resolve()
//Promise.reject()

//try catch
try {
  //   something();
  let a;
  if (!a) {
    throw new Error("Biến a phải có dữ liệu");
  }
  console.log("ok chưa");
} catch (e) {
  document.body.innerHTML = `<h3 style ="color: red">${e.message}</h3>`;
} finally {
  console.log("Đã xong");
}
