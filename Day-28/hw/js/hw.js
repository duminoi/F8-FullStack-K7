var form = document.querySelector("form"); // form
var todoInput = document.querySelector(".todo-input"); // ô input
var todoList = document.querySelector(".todo-list"); //div todolist

function createTask(e) {
  e.preventDefault();
  if (todoInput.value === "") {
    alert("vui long nhap task");
    return;
  } else {
    var tasks = document.createElement("div");
    tasks.classList.add("tasks");

    var task = document.createElement("div");
    task.classList.add("task");

    var todoContent = document.createElement("div");
    todoContent.classList.add("todo-content");
    todoContent.innerHTML = todoInput.value;

    var action = document.createElement("div");
    action.classList.add("action");

    var updateIcon = document.createElement("i");
    updateIcon.classList.add("fa-solid", "fa-pen-to-square", "update-icon");

    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash", "delete-icon");

    var formList = document.createElement("form");
    formList.classList.add("TodoForm", "form-list");

    var inputList = document.createElement("input");
    inputList.classList.add("todo-input", "input-list");
    inputList.type = "text";
    inputList.value = todoContent.innerText;

    var btnList = document.createElement("button");
    btnList.type = "submit";
    btnList.classList.add("todo-btn", "btn-list");
    btnList.innerText = "Add Task";
    todoInput.value = "";
    formList.appendChild(inputList);
    formList.appendChild(btnList);
    action.appendChild(updateIcon);
    action.appendChild(deleteIcon);
    task.appendChild(todoContent);
    task.appendChild(action);
    tasks.appendChild(task);
    tasks.appendChild(formList);
    todoList.appendChild(tasks);
    todoContent.addEventListener("click", function () {
      if (
        todoContent.style.color !== "#fafafa7d" &&
        todoContent.style.textDecoration !== "line-through"
      ) {
        todoContent.style.textDecoration = "line-through";
        todoContent.style.color = "#fafafa7d";
      } else {
        todoContent.style.textDecoration = "none";
        todoContent.style.color = "#fff";
      }
    });
    //update

    updateIcon.addEventListener("click", function () {
      formList.style.display = "block";
      task.style.display = "none";

      formList.addEventListener("submit", function (e) {
        e.preventDefault();
        inputList.focus();
        todoContent.innerText = inputList.value;
        console.log(inputList.value);
        formList.style.display = "none";
        task.style.display = "flex";
      });
    });
    //delete
    deleteIcon.addEventListener("click", function () {
      todoList.removeChild(tasks);
    });
  }
}
form.addEventListener("submit", createTask);
