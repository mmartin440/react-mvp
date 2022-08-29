import React from "react"
import SubTask from "./SubTask"
// import { FaPlus } from 'react-icons/fa'
import SubButton from "./SubButton"
import TodoList from "./TodoList"

const SubTaks = ({subTasks,onDelete,onToggle,currentMainId,onClick, onSubPlus,mainTask,}) => {
  return (
    <div className="subTasks">
      <button onClick={onClick}>BACK TO TASK</button>
      <>
        {mainTask.map((mTask) =>
          mTask.id === currentMainId ? (
            <TodoList key={mTask.id} mTask={mTask} />
          ) : (
            ""
          )
        )}
      </>
      {subTasks.map((task) =>
        task.main_id === currentMainId ? (
          <SubTask
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ) : (
          ""
        )
      )}
      <div className="addSub">
        <SubButton onClick={onSubPlus} />
        <p className="ant"> ...add new sub task</p>
      </div>
    </div>
  )
}

export default SubTaks
