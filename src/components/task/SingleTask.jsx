import { useState } from "react";

const SingleTask = ({ task, editTask, toggleComplete, deleteTask }) => {
  const [isClick, setIsClick] = useState(false);
  const [updateText, setUpdateText] = useState(task.text);
  const handleUpdateText = () => {
    if (updateText.trim()) {
      editTask(task.id, { text: updateText });
      setIsClick(false);
    }
  };

  const handleOpenModal = () => {
    setIsClick(true);
    setUpdateText(task.text);
  };

  const handleCloseModal = () => {
    setIsClick(false);
  };

  return (
    <li>
      <span
        onClick={() => toggleComplete(task.id)}
        style={{
          textDecoration: task.isCompleted ? "line-through" : "none",
          userSelect: "none",
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>

      <button onClick={handleOpenModal}>Edit Data</button>

      {isClick && (
        <div style={{ backgroundColor: "mediumseagreen" }}>
          <input
            type="text"
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
          />
          <button type="button" onClick={handleUpdateText}>
            Change
          </button>
          <button type="button" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      )}
    </li>
  );
};
export default SingleTask;
