function TaskForm({ onAddTask }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newTask = {
      id: Date.now(),
      title: formData.get("title"),
      description: formData.get("description"),
      dueDate: formData.get("dueDate"),
      priority: formData.get("priority"),
      completed: false,
    };

    onAddTask(newTask);

    event.target.reset();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>

      <div className="form-group">
        <label>Task Name</label>
        <input
          type="text"
          name="title"
          placeholder="Enter task name"
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter task description"
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          required
        />
      </div>

      <div className="form-group">
        <label>Priority</label>
        <select name="priority" defaultValue="Medium">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;