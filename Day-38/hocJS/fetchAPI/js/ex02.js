const form = document.querySelector("form");
const overlay = document.querySelector(".overlay");
const addBtn = document.querySelector(".btn.add");
const serverApiUrl = "http://localhost:3000";

const getUsers = async (params = {}) => {
  let query = new URLSearchParams(params).toString();
  if (query) {
    query = "?" + query;
  }
  const response = await fetch(serverApiUrl + "/users" + query);
  const users = await response.json();
  render(users);
};

const getUser = async (id) => {
  try {
    if (!id) {
      throw new Error("Id not exist");
    }
    const response = await fetch(serverApiUrl + "/users" + `/${id}`);
    if (!response.ok) {
      throw new Error("User not exist");
    }
    const user = await response.json();
    fillUserFormUpdate(user);
  } catch (e) {
    console.log(e.message);
  }
};
function render(users) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = `${users
    ?.map(({ id, name, email, status }, index) => {
      return `<tr>
    <td>${index + 1}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>
      <span class=" badge bg-${status === "active" ? "success" : "warning"}">${
        status === "active" ? "kích hoạt" : "chưa kích hoạt"
      }</span>
    </td>
    <td>
      <button class="btn bg-warning" data-action="edit" data-id="${id}">Sửa</button>
    </td>
    <td>
      <button class="btn bg-danger" data-action="delete" data-id="${id}">Xóa</button>
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
const updateUser = async (id, data) => {
  try {
    if (!id) {
      throw new Error("ID not exist");
    }
    const response = await fetch(`${serverApiUrl}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Update Failed");
    }
    getUsers(); //Cập nhật lại table
    closeFormUpdate(); //Đóng form update
  } catch (e) {
    alert(e.message);
  }
};
const deleteUser = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await fetch(`${serverApiUrl}/users/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        getUsers();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    }
  });
};
addBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  form.style.display = "flex";
  addCancelBtn();
});

const addEventFormSubmit = () => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(form)]);
    console.log(formData);
    if (!form.dataset.id) {
      const status = await addUser(formData);
      if (status) {
        getUsers();
        form.reset();
      } else {
        alert("Thêm thất bại");
      }
    } else {
      const id = form.dataset.id;
      console.log(id);
      //call API Update user
      updateUser(id, formData);
    }
  });
};

const inputForm = document.querySelector("form.form input");
form.addEventListener("input", (e) => {
  console.log(inputForm.innerText);
});

const addEventActionBtn = () => {
  const tbody = document.querySelector("tbody");
  tbody.addEventListener("click", ({ target }) => {
    if (target.dataset.action === "edit") {
      //gọi hàm để xử lý cập nhật
      getUser(target.dataset.id);
    }
    if (target.dataset.action === "delete") {
      deleteUser(target.dataset.id);
    }
  });
};
const addCancelBtn = () => {
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("btn", "btn-danger");
  closeBtn.innerText = "Hủy";
  if (!form.lastElementChild.classList.contains(`btn-danger`)) {
    form.append(closeBtn);
  }
  closeBtn.addEventListener("click", () => {
    closeFormUpdate();
    closeBtn.remove();
  });
};
const fillUserFormUpdate = ({ id, name, email, status }) => {
  const form = document.querySelector("form.form");
  const addBtn = document.querySelector(".btn.add");
  form.dataset.id = id;
  form.elements.name.value = name;
  form.elements.email.value = email;
  form.elements.status.value = status;
  addBtn.innerHTML = "Sửa";
  //mở form
  overlay.style.display = "block";
  form.style.display = "flex";
  //thêm nút hủy khi ko muốn sửa form nữa
  addCancelBtn();
};
console.dir(form);
const closeFormUpdate = () => {
  const form = document.querySelector("form.form");
  form.reset();
  delete form.dataset.id;
  addBtn.innerText = "Thêm";
  overlay.style.display = "none";
  form.style.display = "none";
};

const addEventFilterForm = () => {
  const form = document.querySelector(".filter-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { status, keyword } = Object.fromEntries([...new FormData(form)]);

    const params = {};
    if (status === "active" || status === "inactive") {
      params.status = status;
    }
    if (keyword) {
      params.q = keyword.trim();
    }
    getUsers(params);
  });
};
const addEventSort = () => {
  const sortItem = document.querySelectorAll(".sort-item");
  sortItem.forEach((sortItem) => {
    sortItem.addEventListener("click", (e) => {
      const itemActive = document.querySelector(".sort-item.active");
      if (itemActive) {
        itemActive.classList.remove("active");
      }
      e.target.classList.add("active");
      const value = e.target.dataset.value;
      console.log(value);
      const params = {
        _sort: "id",
        _order: value === "latest" ? "desc" : "asc",
      };
      getUsers(params);
    });
  });
};

getUsers();
addEventFormSubmit(); // sự kiện khi submit form
addEventActionBtn(); // Thực hiện hành động (xóa || sửa)
addEventFilterForm(); //tìm kiếm lọc
addEventSort(); // sắp xếp danh sách
//Hiểu luồng update,delete thì check code từ hàm addEventActionBtn
