// import React from 'react'

import { useState } from "react";

import { v4 as uuid } from "uuid";
import { useDispatch } from "../../store/hook";
import { addTodo } from "../../store/action/todoAction";

export default function TodoAdd() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const todo = {
    id: uuid(),
    task: name,
    isCompleted: false,
  };
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleAdd(e);
        }}
        action=""
      >
        <input
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Name..."
        />
        <button>Add</button>
      </form>
    </div>
  );
}
