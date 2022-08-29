import React from "react"
import Category from "./Category.jsx"

const Categories = ({ categorys, onDelete, onPlus }) => {
  return (
    <div>
      {categorys.map((cat) => (
        <Category key={cat.id} cat={cat} onDelete={onDelete} onPlus={onPlus} />
      ))}
    </div>
  )
}

export default Categories
