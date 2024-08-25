export const initialValue = {
  count: 0,
  todoList: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + 1 };
    case "counter/decrement":
      return { ...state, count: state.count - 1 };
    case "todos/add":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "todos/check": {
      const id = action.payload.id;
      const isCompleted = action.payload.isCompleted;
      //Cách 1
      //   const list = [...state.todoList];
      //   list[id] = { ...list[id], isCompleted: isCompleted };

      //Cách 2: có thể dưa thẳng list vào return luôn
      const list = state.todoList.map((todo) => {
        if (todo.id == id) {
          todo.isCompleted = isCompleted;
        }
        return todo;
      });
      return {
        ...state,
        todoList: list,
      };
    }
    case "todos/remove":
      console.log(action.payload);
      return {
        ...state,
        todoList: state.todoList.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
