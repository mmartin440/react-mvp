import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { useState } from 'react'


const SubTask = ({task, onDelete, onToggle}) => {
  const [checked, setChecked] = useState(false)
  console.log(checked, 'check box click')
  const handleChange = (event) => {
    setChecked({checked, [event.target.name] : event.target.checked})
  }
  return (
    <div className={`subTask ${task.completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(task.id)}>
         <label>
          <input 
          name='checkbox'
          value={checked.checkbox}
          onChange={handleChange}
          type='checkbox'
          />
        </label>
       <p className={` ${checked.checkbox === true ? 'checkboxOn' : 'checkbox' }`}>
       {task.sub_todo}
        </p> 
        <FaTrashAlt onClick={() => onDelete(task.id)} />
    </div>
  )
}

export default SubTask
