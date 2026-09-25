import React from "react";
import Children from "./Children";
import { useState } from "react";
import "./index.css";

function App() {
  const food = ["Dal", "Chawal", "Sabji", "Chicken"];
  const foodClicked = (item,event) => {
    console.log(`${item} is bought`);
    console.log(event)
  };

  let[value,setValue]=useState("sdfkjsldkfj");


  return (
    <>
      <Children>
        <h1>Healthy Food</h1>
        <div>
          
          <input type="text" name="" id="input" placeholder="Enter the foodItem" value={value} onChange={(e)=>
            setValue(e.target.value)
          }/>
          <div className='display'>You are entering, {value}</div>
          {food.map((item) => {
            return (
              <div
                style={{
                  fontWeight: "bold",
                  border: "1px solid green",
                  padding: "5px",
                }}
              >
                {item}
                <button className="buyBtn" onClick={(event)=>foodClicked(item,event)}>
                  Buy
                </button>
              </div>
            );
          })}
        </div>
      </Children>
      <Children>
        <div>
          <h2>Above are the list of healthy food</h2>
        </div>
      </Children>
    </>
  );
}

export default App;
