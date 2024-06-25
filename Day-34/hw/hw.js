const items = document.querySelectorAll(".list-item");
const list = document.querySelector(".list");
items.forEach(function (item) {
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
    render2(); //săp xếp lại thứ tự bài
  });
});

function render() {
  const subTask = Array.from(list.querySelectorAll(".list-item:not(.active)"));
  const topic = Array.from(list.querySelectorAll(".list-item.active"));

  topic.forEach(function (task, index) {
    var span = task.firstChild;
    const textNode = document.createTextNode(`Module ${index + 1}:`);
    task.insertBefore(textNode, span);
  });
  subTask.forEach(function (task, index) {
    var span = task.firstChild;
    const textNode = document.createTextNode(`Bài ${index + 1}:`);
    task.insertBefore(textNode, span);
  });
}
render(); //khởi chạy HTML
function render2() {
  const subTask = Array.from(list.querySelectorAll(".list-item:not(.active)"));
  const topic = Array.from(list.querySelectorAll(".list-item.active"));

  topic.forEach(function (task, index) {
    var span = task.firstChild;
    const textNode = document.createTextNode(`Module ${index + 1}:`);
    task.replaceChild(textNode, span);
  });
  subTask.forEach(function (task, index) {
    var span = task.firstChild;
    const textNode = document.createTextNode(`Bài ${index + 1}:`);
    task.replaceChild(textNode, span);
  });
}

const initSortaleList = (e) => {
  e.preventDefault();
  var draggingItem = document.querySelector(".dragging");
  const siblings = Array.from(
    list.querySelectorAll(".list-item:not(.dragging)")
  );

  var nextTargetDrop = siblings.find(function (sibling) {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  console.log(`e.clientY`, e.clientY);
  list.insertBefore(draggingItem, nextTargetDrop);
};

list.addEventListener("dragover", initSortaleList);
list.addEventListener("dragenter", function (e) {
  e.preventDefault();
});
