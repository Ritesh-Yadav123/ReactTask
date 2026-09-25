import React from "react";
import styles from "./input.module.css";

function Input({ addTask }) {
  return (
    <div className={styles.input}>
      <input type="text" name="task" id="task" placeholder="Enter the task" />
      <input type="date" name="date" id="date" placeholder="10/06/2026" />
      <button
        style={{
          color: "red",
          backgroundColor: "green",
          height: "50px",
          width: "150px",
          border: "none",
          borderRadius: "10px"
        }}
        onClick={()=>{addTask("a","b")}}
      >
        Add Task
      </button>
    </div>
  );
}

export default Input;
