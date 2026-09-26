function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <h2>Daily Task Manager</h2>

      <div className="nav-links">
        <button
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => setCurrentPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={currentPage === "tasks" ? "active" : ""}
          onClick={() => setCurrentPage("tasks")}
        >
          Tasks
        </button>

        <button
          className={currentPage === "completed" ? "active" : ""}
          onClick={() => setCurrentPage("completed")}
        >
          Completed
        </button>
      </div>
    </nav>
  );
}

export default Navbar;