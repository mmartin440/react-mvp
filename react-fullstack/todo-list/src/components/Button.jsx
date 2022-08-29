import React from 'react'

const Button = ({color,text,onClick}) => {
  return (
    <div className='btnContainer'>
      <button className='btn' style={{background: color}} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
