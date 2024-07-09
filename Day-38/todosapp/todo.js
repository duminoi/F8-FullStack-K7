const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");
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
getTasks();

function render(tasks) {
  const Data = document.querySelector(".data ");
  Data.innerHTML = `
        ${tasks
          .map((task) => {
            return `
        <div class="list-data">
          <span class="content-data">${task.name}</span>
          <div class="action">
            <div class="deleteBtn btn">
              <i class="fa-solid fa-trash-can fill-white"></i>
            </div>
            <div class="btn editBtn">
              <i class="fa-solid fa-pen-to-square fill-white"></i>
            </div>
            <div class="completeBtn btn">
              <i class="fa-solid fa-square-check fill-white"></i>
            </div>
          </div>
        </div>     `;
          })
          .join("")}
    `;
}

const addTask = async (data) => {
  try {
    const response = await fetch(serverApiUrl + "/tasks", {
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

addTask({
  name: "F8 offline",
});
// const addEventFormSubmit = () => {
//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const formData = Object.fromEntries([...new FormData(form)]);
//     console.log(formData);
//     // const inputForm = document.querySelector("form.form input");
//     // console.log(inputForm.innerHTML);
//     addTasks(formData);
//     getTasks();
//   });
// };
// addEventFormSubmit();
