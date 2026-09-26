import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Tasks({ tasks, setTasks }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: true }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const editTask = (
    id,
    title,
    description,
    dueDate,
    priority
  ) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title,
              description,
              dueDate,
              priority,
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPriority =
      filter === "All" ||
      task.priority === filter;

    return matchesSearch && matchesPriority;
  });

  return (
    <div className="page">
      <h1>My Tasks</h1>

      <p>
        Add and manage your daily tasks.
      </p>

      <TaskForm onAddTask={addTask} />

      <div className="controls">
        <input
          type="text"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <h3>Total Tasks: {filteredTasks.length}</h3>

      <TaskList
        tasks={filteredTasks}
        onComplete={completeTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default Tasks;