import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onComplete,
  onDelete,
  onEdit,
}) {
  if (tasks.length === 0) {
    return (
      <div className="empty-message">
        No matching tasks found.
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;