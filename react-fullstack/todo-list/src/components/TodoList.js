import React from 'react'

const TodoList = ({mTask}) => {
  return (
    <>
        <h2 className='left-h'>{mTask.main_todo}</h2>
        <h4 className='left-h'> {`DUE DATE: ${mTask.due_date}`}</h4>
    </>
  )
}

export default TodoList
