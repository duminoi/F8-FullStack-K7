// import React from 'react'

// import { useContext } from "react";
// import { ProviderContext } from "../../store/Provider";
import { completedTodo, removeTodo } from "../../store/action/todoAction";
import { useDispatch, useSelector } from "../../store/hook";
export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  const handleCheck = (e, id) => {
    dispatch(completedTodo(id, e));
  };
  const handleRemove = (index) => {
    dispatch(removeTodo(index));
  };
  return (
    <div>
      <ul>
        {todoList.map(({ id, isCompleted, task }) => {
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
