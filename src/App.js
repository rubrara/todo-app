import "./App.css";
import React, { Component } from "react";
import { useState } from "react";
import "./components/Todo.js";
import Todo from "./components/Todo.js";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [todoEdit, setTodoEdit] = useState({
    id: null,
    value: "",
  });

  const addTodo = (text) => {
    if (text.length <= 2) return;
    const todo = {
      value: text,
      id: Math.floor(Math.random() * 10000),
      isComplete: false,
    };

    setTodos((prevState) => [...prevState, todo]);
    setInputValue("");
  };

  const editTodo = (inputValue) => {
    const editedTodo = {
      id: todoEdit.id,
      value: inputValue,
    };

    if (inputValue.length <= 2) return;

    setTodos((prevState) =>
      prevState.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );

    setTodoEdit({
      id: null,
      value: "",
    });

    setInputValue("");
  };

  const removeTodo = (id) => {
    if (!id) return;

    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  };

  const onEditClick = (todoEdit) => {
    setTodoEdit(todoEdit);
    setInputValue(todoEdit.value);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1> Your TODO list</h1>

      <TodoForm
        addTodo={addTodo}
        setInputValue={setInputValue}
        inputValue={inputValue}
        todoEdit={todoEdit}
        editTodo={editTodo}
      />

      {todos.map((t) => (
        <Todo
          todo={t}
          remove={removeTodo}
          completeTodo={completeTodo}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
};

export default App;
