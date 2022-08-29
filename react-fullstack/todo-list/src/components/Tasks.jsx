import React from "react"
import Task from "./Task.jsx"
import Button from "./Button.jsx"
import AddTask from "./AddTask.jsx"

const Tasks = ({mainTasks, onDelete, onPlus, currentCat, showAddTask, setShowAddTask,onAdd,}) => {
  console.log(currentCat, "currentCat")
  return (
    <>
      <Button
        color={showAddTask ? "#ff8080" : "#6d8e7c"}
        text={showAddTask ? "CLOSE" : "ADD TASK"}
        onClick={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={onAdd} currentCat={currentCat} />}
      {mainTasks.map((task) =>
        task.category_id === currentCat ? (
          <Task key={task.id} task={task} onDelete={onDelete} onPlus={onPlus} />
        ) : (
          ""
        )
      )}
    </>
  )
}

export default Tasks
