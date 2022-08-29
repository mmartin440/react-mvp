import React, {useState} from 'react'
import {FaTrash} from 'react-icons/fa'; 
import {FaPlus} from 'react-icons/fa'; 

const Task = ({task, onDelete, onPlus}) => {
  
  return (
    <div className='main'>
      <div className='task-container'>
        <div className='leftTask'>
        {task.main_todo}
        </div>
        <div className='left-logo'>
        <FaPlus 
        className='plusBtn' 
        onClick={() => onPlus(task.id)} />
        <FaTrash 
        className='trashBtn'
        style={{color: 'red', cursor: 'pointer'}}
        onClick={() => onDelete(task.id)}/>
        </div>
      </div>
    </div>
  )
}

export default Task
