import EditTask from "./EditTask";

const ShowTask = ({ tasks, toggleComplete, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            // <li key={task.id}>
            //   <span
            //     onClick={() => toggleComplete(task.id)}
            //     style={{
            //       textDecoration: task.isCompleted ? "line-through" : "none",
            //       userSelect: "none",
            //     }}
            //   >
            //     {task.text}
            //   </span>
            //   <button onClick={() => deleteTask(task.id)}>
            //     <i className="fa-solid fa-trash"></i>
            //   </button>
            // </li>
            <EditTask
              key={task.id}
              task={task}
              editTask={editTask}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      ) : (
        <h1>NO Data Found</h1>
      )}
    </div>
  );
};

export default ShowTask;
