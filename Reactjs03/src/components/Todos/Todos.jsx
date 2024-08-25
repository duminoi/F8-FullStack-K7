// import React from 'react'

import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

export default function Todos() {
  return (
    <div>
      <h1>Todos App</h1>
      <TodoAdd />
      <TodoList />
    </div>
  );
}
