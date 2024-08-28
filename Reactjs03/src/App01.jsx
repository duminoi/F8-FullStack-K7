// import React from "react";

// import Counter from "./components/Counter";
import Todos from "./components/Todos/Todos";
import { useSelector } from "./store/hook";

export default function App() {
  const count = useSelector((state) => state.count);
  return (
    <div>
      {/* <Counter /> */}
      <Todos />
      <h2>Count: {count}</h2>
    </div>
  );
}

//Custom Hook
//Tách reducer và combined
//Middleware (Xử lý async action)
//HOC = Higher Order Component
