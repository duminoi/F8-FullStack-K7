F8.create("todo-app", function () {
  return `<div class="todo-app">
          <h1>Todo App</h1>
          <ul>
          <li>Todo 1</li>
          <li>Todo 2</li>
          <li>Todo 3</li>
          </ul>
          <form>
              <input type="text" placeholder="Name..."/>
              <button type="submit">Add</button>
          </form>
      </div>
      <style>
          h1 {
              color: red;
          }
      </style>`;
});
