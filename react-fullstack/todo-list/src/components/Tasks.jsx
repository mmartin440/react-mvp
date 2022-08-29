import React from 'react'
import Task from './Task.jsx'; 

const Tasks = ({mainTasks, onDelete, onPlus}) => {
  return (
    <>
      {mainTasks.map((task) => (
        <Task 
        key={task.id}
        task={task}
        onDelete={onDelete}
        onPlus={onPlus}/>
      ))}
    </>
  )
} 

export default Tasks
