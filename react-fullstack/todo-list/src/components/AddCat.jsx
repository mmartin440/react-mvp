import React from "react"
import { useState } from "react"

const AddCat = ({ onAdd }) => {
  const [category_task, setCategoryTask] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if (!category_task) {
      alert("Please fill in infromation")
      return
    }
    onAdd({ category_task })
    setCategoryTask("")
  }
  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label-addTask">Category</label>
          <input
            type="text"
            placeholder="Add a Category"
            value={category_task}
            onChange={(e) => setCategoryTask(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="SAVE" className="btn-block" />
      </form>
    </div>
  )
}

export default AddCat
