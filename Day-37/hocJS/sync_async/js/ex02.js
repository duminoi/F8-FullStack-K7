//Async Function
//Resolve Promise không cần dùng then( ko có callback)
//Cách viết như đồng bộ ( Tuần tự)
//Lưu ý: Hàm async luôn trả về 1 promise
const something = async () => {
  return "f8";
};

console.log(something());

const getA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = {
        name: "Đức Minh",
        email: `dmin@gmail.com`,
      };
      //Nếu dữ liệu trả về thành công ==> gọi hàm resolve để trả về
      //Nếu thất bại ==> gọi hàm reject để trả về lỗi
      resolve(user);
      //   rejected("lỗi rồi");
    }, 3000);
  });
};

// const handleGetA = async () => {
//   const user = await getA();
//   console.log(user);
// };

// handleGetA();

(async () => {
  const user = await getA();
  console.log(user);
})();

//Buổi sau:
//tìm hiểu thư viện json-server
//Ôn lại HTTP Request, HTTP Response
//Tìm hiểu hàm fetch()
