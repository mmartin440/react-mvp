import React from "react"

const CatBtn = ({ color, text, onClick }) => {
  return (
    <div className="catContainer-btn">
      <button
        className="cat-btn"
        style={{ background: color }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default CatBtn
