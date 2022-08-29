import React from "react"

const SubButton = ({ onClick }) => {
  return (
    <>
      <button className="sub-btn" onClick={onClick}>
        +
      </button>
    </>
  )
}

export default SubButton
