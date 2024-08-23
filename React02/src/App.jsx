import { useReducer } from "react";
const reducer = (prevState, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...prevState, count: prevState.count + 1 };
    case "todos/add":
      return {
        ...prevState,
        todoList: [...prevState.todoList, action.payload],
      };
    default:
      return prevState;
  }
};
export default function App() {
  /*
  State sẽ có dạng như sau: 
  {
    count: 0,
    todoList: [],
    user: {}
  }

  Action sẽ có dạng như sau: 
  {
    type: "ten_hanh_dong",
    payload: "du lieu can gui len"
  }
  */
  const initialState = {
    count: 0,
    todoList: [],
    user: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleClick = () => {
    dispatch({
      type: "counter/increment",
      payload: 5,
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
