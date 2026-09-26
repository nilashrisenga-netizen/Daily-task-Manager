import { useState } from "react";

function TaskCard({ task, onComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [priority, setPriority] = useState(task.priority);

  const saveTask = () => {
    if (!title.trim() || !description.trim()) {
      return;
    }

    onEdit(
      task.id,
      title,
      description,
      dueDate,
      priority
    );

    setIsEditing(false);
  };

  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <div className="task-info">

        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </>
        ) : (
          <>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </>
        )}

        <div className="task-details">
          <span>Due: {task.dueDate}</span>
          <span>Priority: {task.priority}</span>
        </div>
      </div>

      <div className="task-actions">

        {!task.completed && !isEditing && (
          <button
            className="complete-button"
            onClick={() => onComplete(task.id)}
          >
            Complete
          </button>
        )}

        {isEditing ? (
          <button
            className="save-button"
            onClick={saveTask}
          >
            Save
          </button>
        ) : (
          <button
            className="edit-button"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

        <button
          className="delete-button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskCard;