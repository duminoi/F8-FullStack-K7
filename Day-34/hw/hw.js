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
  const allTask = Array.from(list.querySelectorAll(".list-item"));

  allTask.forEach(function (task, index) {
    var span = task.firstChild;
    const textNode = document.createTextNode(`Bài ${index + 1}:`);
    task.insertBefore(textNode, span);
  });
}
render();
function render2() {
  const allTask = Array.from(list.querySelectorAll(".list-item"));

  allTask.forEach(function (task, index) {
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
