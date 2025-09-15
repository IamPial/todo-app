import { useState } from "react";

const CreateTask = ({ addNewTask }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type your Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          if (text) {
            addNewTask(text);
            setText("");
          }
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTask;
