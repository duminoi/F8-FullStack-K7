const serverApiUrl = "http://localhost:3000";

const getUsers = async () => {
  const response = await fetch(serverApiUrl + "/users");
  const users = await response.json();
  render(users);
};
getUsers();

function render(users) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = `${users
    ?.map(({ id, name, email, status }, index) => {
      return `<tr>
    <td>${index + 1}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>
      <span class="badge bg-${
        status === "kích hoạt" ? "success" : "warning"
      }">${status === "kích hoạt" ? "kích hoạt" : "chưa kích hoạt"}</span>
    </td>
    <td>
      <button class="btn bg-warning">Sửa</button>
    </td>
    <td>
      <button class="btn bg-danger">Xóa</button>
    </td>
  </tr>`;
    })
    .join("")}`;
}
const addUser = async (data) => {
  try {
    const response = await fetch(serverApiUrl + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    return response.ok;
  } catch {
    return false;
  }
};
const form = document.querySelector("form");
const overlay = document.querySelector(".overlay");
const addBtn = document.querySelector(".btn.add");
addBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  form.style.display = "flex";
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  form.style.display = "none";
});

const addEventFormSubmit = () => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(form)]);
    console.log(formData);
    const status = await addUser(formData);

    if (status) {
      getUsers();
      form.reset();
    } else {
      alert("Thêm thất bại");
    }
  });
};

addEventFormSubmit();
