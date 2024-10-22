import React from 'react'
import './TaskList.css'


function Tasklist (props) {
  const {title} = props
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
            <ul className='task'>{ title }</ul>
            <button className='complite'></button>
            <button className='delete'></button>
        </div>
    </div>
  )
}
 export default Tasklist