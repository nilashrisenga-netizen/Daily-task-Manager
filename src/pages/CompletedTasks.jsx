import TaskCard from "../components/TaskCard";

function CompletedTasks({ tasks, setTasks }) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div className="page">
      <h1>Completed Tasks</h1>

      <p>
        You have completed{" "}
        {completedTasks.length} task(s).
      </p>

      {completedTasks.length === 0 ? (
        <div className="empty-message">
          No completed tasks yet.
        </div>
      ) : (
        <div className="task-list">
          {completedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={() => {}}
              onDelete={deleteTask}
              onEdit={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CompletedTasks;