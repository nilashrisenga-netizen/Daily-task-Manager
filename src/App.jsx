import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("dailyTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("dailyTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {currentPage === "dashboard" && (
        <Dashboard tasks={tasks} />
      )}

      {currentPage === "tasks" && (
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
        />
      )}

      {currentPage === "completed" && (
        <CompletedTasks
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
    </>
  );
}

export default App;