import React from 'react'
import './TaskFrame.css'
import TaskList from './TaskList'
import { TASKS } from './TASKS'

function Tasklist () {
  return (
    <div className='taskFrame'>
        <div className='search'>
            <input
            type="text"
            class="form-control mb-2"
            placeholder="Task.."
             />
        </div>
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
    </div>
  )
}
 export default Tasklist