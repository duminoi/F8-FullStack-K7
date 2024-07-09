const overlay = document.querySelector(".overlay");
const form = document.querySelector(".wrapper form.form");
const addBtn = document.querySelector(".tools .addBtn");
const cancel = document.querySelector(".cancel");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.style.display = `block`;
  form.style.display = "block";
});

function closeForm(e) {
  e.preventDefault();
  overlay.style.display = `none`;
  form.style.display = "none";
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
            <div class="deleteBtn btn" data-id="${task.id}">
              <i class="fa-solid fa-trash-can fill-white"></i>
            </div>
            <div class="btn editBtn" data-id="${task.id}">
              <i class="fa-solid fa-pen-to-square fill-white"></i>
            </div>
            <div class="completeBtn btn" >
              <i class="fa-solid fa-square-check fill-white"></i>
            </div>
          </div>
        </div>`;
          })
          .join("")}
    `;
  handleDelete();
  handleEdit();
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
    console.log(response);
    return response.ok;
  } catch {
    return false;
  }
};
// const inputForm = document.querySelector("form.form input");
// form.addEventListener("input", (e) => {
//   console.log(inputForm.innerText);
// });

const addEventFormSubmit = () => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(form)]);
    console.log(formData);
    const status = await addTasks(formData);
    if (status) {
      getTasks();
      form.reset();
    } else {
      alert("Thêm thất bại");
    }
  });
};

const deleteTask = async (id) => {
  const response = await fetch(apiUrl + "/tasks/" + id, {
    method: "DELETE",
  });
  console.log(response);
  return response.ok;
};

const handleDelete = () => {
  const deleteBtn = document.querySelectorAll(".list-data .action .deleteBtn");
  console.log(deleteBtn);
  Array.from(deleteBtn).forEach((deleteBtn) => {
    const id = deleteBtn.getAttribute("data-id");
    deleteBtn.addEventListener("click", async () => {
      console.log(id);
      const status = await deleteTask(id);
      if (status) {
        await getTasks();
      } else {
        alert("failed");
      }
    });
  });
};
addEventFormSubmit();
getTasks();
