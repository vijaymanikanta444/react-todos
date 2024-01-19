import React, { useState } from "react";
import TodoInput from "../TodoInput";
import "./Todos.css";

import { v4 as uuidv4 } from "uuid";
import TodosList from "../TodosList";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const [currentTask, setCurrentTask] = useState(null);
  //   todos = {id: Number, task: String, isCompleted: boolean}

  const onTodoSubmit = (todo) => {
    if (!currentTask) {
      // add new task
      setTodos([...todos, { id: uuidv4(), task: todo, isCompleted: false }]);
    } else {
      // update the existing task
      const newList = todos.map((item) => {
        if (item.id === currentTask.id) {
          return { ...item, task: todo };
        } else {
          return item;
        }
      });
      setTodos(newList);
      setCurrentTask(null);
    }
  };

  const onTodoComplete = (id) => {
    const newList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });

    setTodos(newList);
  };

  const onTodoDelete = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);

    setTodos(newList);
  };

  const onTodoEdit = (id) => {
    const task = todos.filter((todo) => todo.id === id);
    setCurrentTask(task[0]);
  };

  return (
    <div className="todos-container">
      <h1>Todos</h1>
      <TodoInput onTodoSubmit={onTodoSubmit} currentTask={currentTask} />
      <TodosList
        todos={todos}
        onTodoComplete={onTodoComplete}
        onTodoDelete={onTodoDelete}
        onTodoEdit={onTodoEdit}
      />
    </div>
  );
};

export default Todos;
