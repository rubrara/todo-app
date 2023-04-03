import React, { useEffect, useRef } from "react";

const CustomForm = ({
  placeholder,
  name,
  className,
  value,
  onChange,
  buttonClassName,
  buttonOnClick,
  buttonBody,
  isEditing,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    isEditing && inputRef.current.focus();
  }, [isEditing]);

  return (
    <>
      <input
        placeholder={placeholder}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      <button className={buttonClassName} onClick={buttonOnClick}>
        {buttonBody}
      </button>
    </>
  );
};

const TodoForm = ({
  addTodo,
  setInputValue,
  inputValue,
  todoEdit,
  editTodo,
}) => {
  return (
    <div className="todo-form">
      {todoEdit.id === null ? (
        <CustomForm
          placeholder={"Add a todo"}
          name="text"
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          buttonClassName="todo-button"
          buttonOnClick={() => addTodo(inputValue)}
          buttonBody="Add Todo"
          isEditing={false}
        />
      ) : (
        <CustomForm
          placeholder={"Edit a todo"}
          name="text"
          className="todo-input edit"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          buttonClassName="todo-button edit"
          buttonOnClick={() => editTodo(inputValue)}
          buttonBody="Update"
          isEditing={true}
        />
      )}
    </div>
  );
};

export default TodoForm;
