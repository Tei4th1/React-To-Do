import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TaskFrame from './components/TaskList/TaskFrame'
import { TASKS } from './components/TaskList/TASKS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <TaskFrame/>
    </>
  )
}

export default App
