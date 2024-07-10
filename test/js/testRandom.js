const test = document.querySelector(".test");
const container = document.querySelector(".container");
container.addEventListener("click", ({ target }) => {
  console.log(target.dataset.id);
});
