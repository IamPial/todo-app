import SingleTask from "./SingleTask";

const ShowTask = ({ tasks, toggleComplete, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <SingleTask
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
