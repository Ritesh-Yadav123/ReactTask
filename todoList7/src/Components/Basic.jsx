import React from "react";
import "./Basic.css";
import { useState } from "react";
import { CreditCardPlus } from "lucide-react";

const Basic = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Task: ${task} and Date : ${date}`);
    setTodoList([...todoList, { task, date, completed: false }]);
    setTask("");
    setDate("");
  };

  const handleCompleted = (index) => {
    setTodoList((prev) => {
      return prev.map((item, i) => {
        return i === index ? { ...item, completed: true } : item;
      });
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="task"
          id=""
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="date"
          name="taskDate"
          id=""
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <button className="submit" onClick={handleSubmit}>
        
    <CreditCardPlus size={50} color="red" />

        </button>
      </form>

      <div>
        {todoList.map((item, index) => {
          return (
            <li key={index}>
              {item.task} - {item.date}{" "}
              {item.completed ? (
                "completed"
              ) : (
                <button onClick={() => handleCompleted(index)}>
                  Mark as completed
                </button>
              )}
            </li>
          );
        })}
      </div>
    </div>
  );


};

function Heading() {
  return <h1 style={{ color: "green" }}>TO DO LIST</h1>;
}

export default Basic;
export { Heading };
