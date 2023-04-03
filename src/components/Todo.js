import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todo, remove, completeTodo, onEditClick }) => {
  return (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={todo.id}>
      <div onClick={() => completeTodo(todo.id)}>{todo.value}</div>

      <div className="icons">
        <TiEdit
          className="edit-icon"
          onClick={() => onEditClick({ id: todo.id, value: todo.value })}
        />
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => remove(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
