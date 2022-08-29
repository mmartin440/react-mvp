import React from 'react'
import InnerLeft from './InnerLeft';

const Left = ({mainTask}) => {
    // console.log(mainTask.length, 'the length'); 
  return (
    <>
      <h3 className='cttco'>CURRENT TASK TO COMPLETE</h3> 
      { mainTask.length > 0 ? mainTask.map((task) => <InnerLeft key ={task.id} task={task} />) : <div className='a'> NO TASKS</div>}
    </>
  )
}

export default Left
