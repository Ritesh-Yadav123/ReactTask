import React from 'react'
import { useRef } from 'react'

function UseRefForm() {

    const nameRef=useRef()
    const emailRef=useRef()

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("NAME : ", nameRef.current.value)
        console.log("EMAIL : ", emailRef.current.value)
    }


  return (
    
    <div>
      <h1> FORM USING useRef </h1>
      <form onSubmit={handleSubmit}>
       NAME:  <input type="text" ref={nameRef} name="" id="" />
        <br />
        EMAIL : <input type="email" ref={emailRef} name="" id="" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default UseRefForm
