import React, { useState } from "react";

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() === "") {
      alert(" Please enter a task!");
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Segoe UI, Arial, sans-serif",
        background: "#f4fafa",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          width: "420px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#056669", marginBottom: "20px" }}>📌 Task Tracker</h2>

        {/* Input & Add Button */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
            style={{
              flex: 1,
              padding: "10px",
              border: "2px solid #ccc",
              borderRadius: "8px 0 0 8px",
              outline: "none",
              fontSize: "15px",
            }}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            style={{
              padding: "10px 15px",
              background: "#056669",
              color: "white",
              border: "none",
              borderRadius: "0 8px 8px 0",
              cursor: "pointer",
              fontSize: "15px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#004c4f")}
            onMouseOut={(e) => (e.target.style.background = "#056669")}
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {tasks.map((t, index) => (
            <li
              key={index}
              style={{
                background: "#dff5f5",
                margin: "10px 0",
                padding: "12px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#056669",
                fontWeight: "500",
              }}
            >
              {t}
              <button
                onClick={() => deleteTask(index)}
                style={{
                  background: "#056669",
                  border: "none",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#004c4f")}
                onMouseOut={(e) => (e.target.style.background = "#056669")}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskTracker;
