import React from "react";

function Input({ className }) {
  return (
    <>
      <div className={className}>
        <input type="text" name="" id="" placeholder="Enter the task" />
        <input type="date" name="" id="" placeholder="Select the date" />
        <button type="submit">Add Tasks</button>
      </div>
    </>
  );
}

export default Input;
