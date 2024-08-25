// import React from 'react'

import { useContext } from "react";
import { ProviderContext } from "../../store/Provider";
export default function TodoList() {
  const { state, dispatch } = useContext(ProviderContext);
  const handleCheck = (e, id) => {
    dispatch({
      type: "todos/check",
      payload: { id: id, isCompleted: e.target.checked },
    });
  };
  const handleRemove = (index) => {
    console.log(index);
    dispatch({ type: "todos/remove", payload: index });
  };
  return (
    <div>
      <ul>
        {state.todoList.map(({ id, isCompleted, task }) => {
          return (
            <li key={id}>
              <input
                type="checkbox"
                onClick={(e) => {
                  handleCheck(e, id);
                }}
              />
              {isCompleted ? (
                <span style={{ textDecoration: "line-through" }}>{task}</span>
              ) : (
                <span>{task}</span>
              )}
              <button
                onClick={() => {
                  handleRemove(id);
                }}
              >
                &times;
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
