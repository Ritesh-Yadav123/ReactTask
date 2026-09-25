import React from "react";
import Heading from "./Components/Header";
import Input from "./Components/Input";
import Children from "./Components/Children";
import "./index.css";

function App() {
  const addTask = (a, b) => {
    console.log(`Task Added ${a} with due date ${b}`);
  };

  return (
    <div>
      <Heading className="header" />
      <Children>
        <Input 
          addTask={addTask}
        ></Input>
      </Children>
    </div>
  );
}

export default App;
