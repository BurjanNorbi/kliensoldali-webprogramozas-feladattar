import TaskList from "./components/TaskList";
import "./styles/App.css";
import taskData from "./data/tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(taskData);

  const removeClickHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggletaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>📝 My To-Do List</h1>
      <TaskList
        data={tasks}
        removeClickHandler={removeClickHandler}
        toggletaskCompletion={toggletaskCompletion}
      />
    </div>
  );
}

export default App;
