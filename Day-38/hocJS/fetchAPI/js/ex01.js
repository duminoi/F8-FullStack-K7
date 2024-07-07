//Các cách gọi API từ JS
//1. fetch()
//2. xMLHttpRequest()
//3. Thư viện: jquery ajax, axios, node, fetch,...
const userApiUrl = "http://localhost:3000/user";

// const getUsers = fetch(userApiUrl);

// fetch(userApiUrl)
//   .then((response) => {
//     //response.text() và response.json() ==> Promise có chứa response body từ server
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const getUsers = async () => {
  const response = await fetch(userApiUrl);
  const data = await response.json();
  console.log(data);
};
getUsers();

// const addUser = async (data) => {
//   const response = await fetch(userApiUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       //   "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: JSON.stringify(data),
//   });
// };

// addUser({
//   name: "User 4",
//   email: "user4@gmail.com",
//   status: "active",
// });

const editUser = async (id, data) => {
  const response = await fetch(userApiUrl + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      //   "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data),
  });
};
//urlencoded: name=ducminh&email=ducminh.gmail.com&status=active
editUser(5, {
  name: "user 5",
  email: "hello",
  status: "unactive",
});

const deleteUser = async (id) => {
  const response = await fetch(userApiUrl + "/" + id, {
    method: "DELETE",
  });
  console.log(response);
};
deleteUser(3);
