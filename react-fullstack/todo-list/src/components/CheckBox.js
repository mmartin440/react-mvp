import React from 'react'

const CheckBox = () => {
  return (
    <div>
      <label>
        <input 
        onChange = {(e) => {
            console.log(e.target.checked);}}
        type = "checkbox"
        name = ""/>
      </label>
    </div>
  )
}

export default CheckBox
