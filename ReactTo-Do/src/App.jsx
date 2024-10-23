import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'
import { TASKS } from '../TASKS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <div className='tasks-container'>
      {
        TASKS.map((task) =>
        <TaskList
        key = {task.id}
        title = {task.title}
        />
        )
      }
    </div>
    </>
  )
}

export default App
