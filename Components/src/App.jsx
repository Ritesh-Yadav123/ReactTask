import React from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Display from './components/Display'

function App() {
  return (
    <div>
      <Header />
      <Input className="input"/>
      <input type="search" name="" id="" className="search" placeholder="Search The Task"/>
      <Display></Display>
    </div>
  )
}

export default App
