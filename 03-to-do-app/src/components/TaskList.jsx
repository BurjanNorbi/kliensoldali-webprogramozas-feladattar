import TaskItem from "./TaskItem";

function TaskList({ data, removeClickHandler, toggletaskCompletion }) {
  return (
    <div className="task-list">
      {data.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          removeClickHandler={removeClickHandler}
          toggletaskCompletion={toggletaskCompletion}
        />
      ))}
    </div>
  );
}

export default TaskList;
