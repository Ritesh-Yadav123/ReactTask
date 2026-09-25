import React from "react";
import { useState } from "react";

const MultiInput = () => {
  const [info, setInfo] = useState({
    name: "Ritesh ",
    email: " ",
    age: " ",
  });

function handleSubmit(e){
    e.preventDefault();
    console.log(e);
    console.log(info);
}

const handleChange=(e)=>{
    const {name, value}=e.target;
    setInfo((prev)=>({
        ...prev,
        [name]:value
    }))
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        NAME : <input type="text" name="name" id="" value={info.name}   onChange={handleChange}/>
        <br></br>
        EMAIL : <input type="email" name="email" id="" value={info.email}  onChange={handleChange}/>
        <br></br>
        AGE : <input type="number" name="age" id="" value={info.age}  onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MultiInput;
