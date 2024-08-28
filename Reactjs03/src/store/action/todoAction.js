export const addTodo = (todo) => {
  return {
    type: "todos/add",
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: "todos/remove",
    payload: id,
  };
};

export const completedTodo = (id, e) => {
  return {
    type: "todos/check",
    payload: { id: id, isCompleted: e.target.checked },
  };
};
