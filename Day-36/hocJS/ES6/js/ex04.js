//Spread
// const arr1 = [`Item1`, `item2`, `item3`];
// const arr2 = [`item4`, ...arr1, `item5`, `item6`];
// console.log(arr2);

// const todos = [`todo1`, `todo2`, `todo3`];
// //Yêu cầu: Thêm todo 4 vào mảng todos và lưu vào biến mới
// const newTodos = [...todos, "todo4"];
// console.log(newTodos);
// console.log(todos);

// const form = {
//   name: "Đức Minh",
//   email: "dmin@gmail.com",
// };
// //cập nhật lại email và lưu object vào biên mới
// const newForm = { ...form, email: "contact@gmai.com" };
// console.log(newForm);

// const something = (args1, args2, args3) => {
//   console.log(args1);
//   console.log(args2);
//   console.log(args3);
// };
// const data = ["data1", `data2`, `data3`];
// something(...data);

//Enhanced Object Literal: khởi tạo biến bên ngoài và trong object chỉ cần viết lại tên biến sẽ tự động khởi tạo key theo biến đó
// const name = `Đức Minh`;
// const email = `dmin@gmail.com`;
// let address;
// const user = {
//   name,
//   email,
//   address,
//   getName: function () {
//     return this.name;
//   },
//   getEmail() {
//     return this.email;
//   },
// };
// console.log(user);

// const something = (name, email, address) => {
//   console.log(`Name: ${name}`);
//   console.log(`Email: ${email}`);
//   console.log(`address: ${address}`);
// };
//Trường hợp 1: Chỉ muốn truyền name
// something(`Đúc Minh`);

//Trường hợp
// something(undefined, `dmin@gmail`);

//Xây dựng hàm hỗ trợ named argument (Áp dụng destruring và Enhanced)
const something = ({ name, email, address }) => {
  console.log(`Name: ${name}`);
  console.log(`Name: ${email}`);
  console.log(`Name: ${address}`);
};

//something ()
const address = "Hà Nội";
something({ address });
