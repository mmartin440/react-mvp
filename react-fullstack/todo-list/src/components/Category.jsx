import React from "react"
import { FaTrash } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"

const Category = ({ cat, onDelete, onPlus }) => {
  return (
    <div className="mainCat">
      <div className="catTitle">{cat.category_task}</div>
      <div className="catLogo">
        <FaPlus className="checkMain" onClick={() => onPlus(cat.id)} />
        <FaTrash
          className="deleteCat"
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(cat.id)}
        />
      </div>
    </div>
  )
}

export default Category
