import React from 'react'
import Input from './Input'
import Display from './Display'

function App() {
  const onSubmit=(e)=>{
    e.preventDefault()
    console.log("Expense Added ")

    // console.log(`You added ${e.target.value}`)
    console.log(`You added ${e.target.expenseType.value} and amount is ${e.target.amount.value}`)
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <Input onSubmit={onSubmit}/>
      <Display></Display>
    </div>
  )
}

export default App
