import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

export default function Counter() {
  // Sử dụng optional chaining để tránh lỗi nếu `state.counter` không tồn tại
  const { value } = useSelector((state) => state.counter);
  console.log(value);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
