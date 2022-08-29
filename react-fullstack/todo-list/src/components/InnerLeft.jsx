import React from 'react'

const InnerLeft = ({task}) => {
  return (
    <ul className='b'>
      <li>{task.main_todo}</li>
    </ul>
  )
}

export default InnerLeft
