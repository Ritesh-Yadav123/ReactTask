import React from "react";
import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm=(e)=>{
    console.log(e)
    e.preventDefault();
    console.log(name);
    console.log(email);
  }
  return (
    <div>
      <h1>ReactForm Example Version 1</h1>
      <form onSubmit={handleForm}>
        <label id="name">Name : </label>
        <input type="text" name="name" onChange={(e)=>{
            setName(e.target.name);
        }}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label id="name">Email : </label>
        <input type="email" name="name" onChange={(e)=>{
            setEmail(e.target.value);
        }}/>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Login;
