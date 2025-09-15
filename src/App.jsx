import { useState } from "react";
import shortid from "shortid";
import CreateTask from "./components/task/createTask";
import ShowTask from "./components/task/ShowTaks";
import FilterTask from "./components/task/FilterTask";
import EditTask from "./components/task/EditTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState("All");

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: shortid.generate(),
    };
    setTasks([task, ...tasks]);
  };

  const editTask = (id, updateData) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) return { ...task, ...updateData };
        return task;
      });
    });
  };

  const deleteTask = (id) => {
    const task = tasks.filter((item) => item.id !== id);
    setTasks(task);
  };

  const toggleComplete = (id) => {
    const newTask = tasks.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setTasks(newTask);
  };

  const handleVisibility = (text) => {
    setVisibility(text);
  };

  function getFilteredTask() {
    if (visibility === "Incomplete")
      return tasks.filter((item) => !item.isCompleted);

    if (visibility === "Complete")
      return tasks.filter((item) => item.isCompleted);
    return tasks;
  }

  return (
    <div>
      <CreateTask addNewTask={addNewTask} />
      <FilterTask visibility={visibility} handleVisibility={handleVisibility} />
      <ShowTask
        tasks={getFilteredTask()}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      {/* <EditTask /> */}
    </div>
  );
};

export default App;
