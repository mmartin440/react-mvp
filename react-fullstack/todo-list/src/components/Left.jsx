import React from "react"
import studying from "./images/studying.jpeg"

const Left = ({ mainTask }) => {
  // console.log(mainTask.length, 'the length');
  return (
    <>
      <div className="img">
        <h3 className="welcome">WELCOME</h3>
        <img src={studying} />
      </div>
    </>
  )
}

export default Left
