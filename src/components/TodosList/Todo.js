import React from "react";
import "./TodosList.css";

const Todo = ({
  id,
  task,
  isCompleted,
  onTodoComplete,
  onTodoDelete,
  onTodoEdit,
}) => {
  const handleCheckbox = (e) => {
    onTodoComplete(e.target.id);
  };

  const handleDeleteBtn = (e) => {
    onTodoDelete(e.target.id);
  };

  const handleEditBtn = (e) => {
    onTodoEdit(e.target.id);
  };

  return (
    <>
      <div className="todo-item-container">
        <div className="todo-item-task">
          <input
            id={id}
            onChange={handleCheckbox}
            type="checkbox"
            checked={isCompleted}
          />
          <div className={isCompleted ? "text strike-text" : "text"}>
            {task}
          </div>
        </div>
        <div className="todo-item-buttons-group">
          <button id={id} className="btn edit-btn" onClick={handleEditBtn}>
            Edit
          </button>
          <button id={id} className="btn delete-btn" onClick={handleDeleteBtn}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
