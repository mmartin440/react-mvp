import React from "react"
import { useState } from "react"

const AddSubTask = ({ onAdd, currentMainId }) => {
  const [sub_todo, setSubTodo] = useState("")
  const [completed, setCompleted] = useState(false)
  const [main_id, setMainId] = useState(currentMainId)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!sub_todo) {
      alert("Please fill in infromation")
      return
    }
    onAdd({ sub_todo, main_id })
    setSubTodo("")
  }
  return (
    <form className="subadd-form" onSubmit={onSubmit}>
      <div className="subform-control">
        <input
          type="text"
          placeholder="Add a Sub task"
          value={sub_todo}
          onChange={(e) => setSubTodo(e.target.value)}
          required
        />
      </div>
      <input type="submit" value="save task" className="subplus" />
    </form>
  )
}

export default AddSubTask
