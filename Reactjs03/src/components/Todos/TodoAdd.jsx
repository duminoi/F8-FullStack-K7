// import React from 'react'

import { useContext, useState } from "react";
import { ProviderContext } from "../../store/Provider";
import { v4 as uuid } from "uuid";

export default function TodoAdd() {
  const { state, dispatch } = useContext(ProviderContext);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  console.log(state.todoList);

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({
      type: "todos/add",
      payload: {
        id: uuid(),
        task: name,
        isCompleted: false,
      },
    });
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
