import React, { useState, useEffect } from "react";
import "./TodoInput.css";

const TodoInput = ({ onTodoSubmit, currentTask }) => {
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    if (currentTask?.task) {
      setTodoInput(currentTask.task);
    }
  }, [currentTask]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todoInput !== "") {
      onTodoSubmit(todoInput);
      setTodoInput("");
    }
  };

  return (
    <form className="todo-input-container" onSubmit={handleFormSubmit}>
      <input
        value={todoInput}
        className="todo-input-field"
        placeholder="please input the todo here"
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        disabled={todoInput === ""}
        type="submit"
        className="todo-input-btn"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoInput;
