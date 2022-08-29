import React from "react"
import { useState } from "react"

const AddTask = ({ onAdd, currentCat }) => {
  console.log(currentCat, "this should have currCat")
  const [main_todo, setMainTodo] = useState("")
  const [due_date, setDueDate] = useState("")
  const [category_id, setCategoryId] = useState(currentCat)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!main_todo || !due_date) {
      alert("Please fill in infromation")
      return
    }
    onAdd({ main_todo, due_date, category_id })

    setMainTodo("")
    setDueDate("")
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label className="label-addTask">TASK</label>
        <input
          type="text"
          placeholder="Add a ToDo"
          value={main_todo}
          onChange={(e) => setMainTodo(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label className="label-addTask">DUE DATE</label>
        <input
          type="text"
          placeholder="ex. August 1, 2021"
          value={due_date}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <input type="submit" value="SAVE" className="btn-block" />
    </form>
  )
}

export default AddTask
