export const initialValue = {
  count: 0,
  todoList: [],
  postList: [],
  auth: {
    user: {},
    isLoading: true,
  },
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
      const { id, isCompleted } = action.payload;
      const updatedTodoList = state.todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted } : todo
      );
      return {
        ...state,
        todoList: updatedTodoList,
      };
    }

    case "todos/remove":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };

    case "posts/update":
      return { ...state, postList: action.payload };

    case "auth/setUser":
      return { ...state, auth: { ...state.auth, user: action.payload } };

    case "auth/setLoading":
      return { ...state, auth: { ...state.auth, isLoading: action.payload } };

    default:
      return state;
  }
};
