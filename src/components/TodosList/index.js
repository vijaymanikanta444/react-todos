import React from "react";
import "./TodosList.css";
import Todo from "./Todo";
import { TypeAnimation } from "react-type-animation";

const TodosList = ({ todos, onTodoComplete, onTodoDelete, onTodoEdit }) => {
  const getModifiedArray = (text, num) => {
    const words = text.split(" ");
    let modified = [];
    let wordSet = "";

    for (let i = 0; i < words.length; i++) {
      wordSet += words[i] + " ";
      modified.push(wordSet, num);
    }
    modified[modified.length - 1] = num * 5;
    return modified;
  };

  console.log({
    hi: getModifiedArray(
      "Please add some text in the input field and submit to show the tasks here...!",
      500
    ),
  });

  return (
    <>
      {todos.length > 0 ? (
        <div className="todos-list-container">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              isCompleted={todo.isCompleted}
              onTodoComplete={onTodoComplete}
              onTodoDelete={onTodoDelete}
              onTodoEdit={onTodoEdit}
            />
          ))}
        </div>
      ) : (
        <TypeAnimation
          sequence={getModifiedArray(
            "Please add some text in the input field and submit to show the tasks here...!",
            100
          )}
          style={{ fontSize: "2em" }}
          className="empty-todos-list-container"
          repeat={Infinity}
        />
      )}
    </>
  );
};

export default TodosList;
