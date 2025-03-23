function TaskItem({ task, removeClickHandler, toggletaskCompletion }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        onChange={() => toggletaskCompletion(task.id)}
        type="checkbox"
        checked={task.completed}
      />
      <span>{task.title}</span>
      <button onClick={() => removeClickHandler(task.id)}>✕</button>
    </div>
  );
}

export default TaskItem;
