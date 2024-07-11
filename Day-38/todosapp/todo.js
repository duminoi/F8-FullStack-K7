const overlay = document.querySelector(".overlay");
const form = document.querySelector(".wrapper form.form");
const addBtn = document.querySelector(".tools .addBtn");
const cancel = document.querySelector(".cancel");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openForm();
});

const openForm = () => {
  overlay.style.display = `block`;
  form.style.display = "block";
};

function closeForm() {
  overlay.style.display = `none`;
  form.style.display = "none";
  addBtn.innerText = "Add Todos";
}

//Fetch API
const apiUrl = "http://localhost:3000";
const getTasks = async () => {
  const response = await fetch(apiUrl + "/tasks");
  const tasks = await response.json();
  render(tasks);
  return tasks;
};
function render(tasks) {
  const Data = document.querySelector(".data ");
  Data.innerHTML = `
        ${tasks
          .map((task) => {
            return `
        <div class="list-data">
          <span class="content-data">${task.name}</span>
          <div class="action">
            <div class="deleteBtn btn"  data-id="${task.id}" data-action="delete">
              <i class="fa-solid fa-trash-can fill-white" data-id="${task.id}" data-action="delete"></i>
            </div>
            <div class="btn editBtn" data-id="${task.id}" data-action="edit">
              <i class="fa-solid fa-pen-to-square fill-white" data-id="${task.id}" data-action="edit"></i>
            </div>
            <div class="completeBtn btn" >
              <i class="fa-solid fa-square-check fill-white"></i>
            </div>
          </div>
        </div>`;
          })
          .join("")}
    `;
}

const addTasks = async (data) => {
  try {
    const response = await fetch(apiUrl + "/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};

const addEventFormSubmit = () => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(form)]);
    if (!form.dataset.id) {
      // Nếu tồn tại data-id thì đây là form Thêm
      const status = await addTasks(formData);
      if (status) {
        getTasks();
        form.reset();
        console.log("vào dây");
      } else {
        alert("Thêm thất bại");
      }
    } else {
      // Đây là form sửa
      const id = form.dataset.id;
      handleUpdateTask(id, formData);
    }
  });
};

const deleteTask = async (id) => {
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
      const response = await fetch(apiUrl + "/tasks/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        getTasks();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    }
  });
};
const handleUpdateTask = async (id, data) => {
  try {
    if (!id) {
      throw new Error("Id not exist");
    }
    const response = await fetch(`${apiUrl}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      closeForm();
      getTasks();
    } else {
      throw new Error("Update failed");
    }
  } catch (e) {
    alert(e.message);
  }
};
const getTask = async (id) => {
  try {
    if (!id) {
      throw new Error("Ko có ID");
    }
    const response = await fetch(`${apiUrl}/tasks/${id}`);
    if (response.ok) {
      const user = await response.json();
      fillFormUpdate(user);
    } else {
      throw new Error("Không tồn tại task !!");
    }
  } catch (e) {
    alert(e.message);
  }
};
const fillFormUpdate = ({ name, id }) => {
  openForm();
  addBtn.innerText = "Update";
  form.dataset.id = id;
  console.log(form.dataset.id);
  form.elements.name.value = name;
};

const handleActionBtn = () => {
  const data = document.querySelector(".data");
  data.addEventListener("click", ({ target }) => {
    if (target.dataset.action === "delete") {
      deleteTask(target.dataset.id);
    }
    if (target.dataset.action === "edit") {
      getTask(target.dataset.id);
    }
  });
};
getTasks();
handleActionBtn();
addEventFormSubmit();
