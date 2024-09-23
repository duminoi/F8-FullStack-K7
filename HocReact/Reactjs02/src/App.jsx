//Day 51
import { useReducer } from "react";
const reducer = (prevState, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...prevState, count: prevState.count + 1 };
    case "todos/getInput":
      return { ...prevState, inputValue: `${action.payload}` };
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
    inputValue: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.todoList);

  const handleClick = () => {
    dispatch({
      type: "counter/increment",
      payload: 5,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "todos/add",
      payload: state.inputValue,
    });
  };
  const handleChangeInput = (e) => {
    console.log(e.target.value);
    dispatch({
      type: "todos/getInput",
      payload: e.target.value,
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleClick}>Click me</button>
      <hr />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        action=""
        className="w-full "
      >
        <input
          type="text"
          className="py-3 px-3"
          onChange={(e) => {
            handleChangeInput(e);
          }}
        />
        <button type="submit" className="rounded bg-indigo-500 ">
          Add task
        </button>
        <ul>
          {state.todoList.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </form>
    </div>
  );
}
