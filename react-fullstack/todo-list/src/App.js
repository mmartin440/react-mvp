import {useState, useEffect} from 'react'; 
import Header from './components/Header.jsx'; 
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx';
import Footer from './components/Footer.jsx'
import SubTaks from './components/SubTaks.jsx';
import AddSubTask from './components/AddSubTask.jsx'; 
import Button from './components/Button.jsx'; 
import Left from './components/Left.jsx';


function App() {

  // we have a boolean that show if a taks is added 
  const [showAddTask, setShowAddTask] = useState(false); 
  const [showAddSubTask, setShowASubTask] = useState(false); 
  const [currentMainId, setCurrentMainId] = useState([]); 
  const [currentSubId, setCurrentSubId] = useState([]);
  const [inputLinkedClicked, setInputLinkedClicked] = useState(false); 
  const [inputSubLinkedClicked, setInputSubLinkedClicked] = useState(false); 
  const [mainTask, setMainTask] = useState([]); 
  // console.log(mainTask, 'after main taks')
  const [subTasks, setSubTask] = useState([]); 
  // console.log(subTasks, 'subTasks'); 

useEffect(() => {
  fetch('http://localhost:3000/api/mainTodo')
  .then((res) => res.json())
  .then((data) => {

    setMainTask(data)
  })
  fetch('http://localhost:3000/api/subTodo')
  .then((res) => res.json())
  .then((data) => {
   
    setSubTask(data)
  })
}, [])
// add task 
const addTask = (task) => {
  // console.log(task, 'task here')
  fetch('http://localhost:3000/api/mainTodo', {
    mode: 'cors', 
    method: 'POST', 
    headers: {
      'Content-Type' : 'application/json'
    }, 
    body: JSON.stringify(task)
  })
  .then((res) => res.json())
  .then((data) => {
   console.log(data, 'data')
   setMainTask([...mainTask, data])
  })
  // const id = Math.floor(Math.random() * 1000) + 1; 
  // const newTask = {id, ...task}
  // setMainTask([...mainTask, newTask])
}
// gettting current id of sub task 
const onSubPlus = (task) => {
  console.log(task, 'onSubPlus'); 
  fetch('http://localhost:3000/api/subTodo', {
    mode: 'cors', 
    method: 'POST', 
    headers: {
      'Content-Type' : 'application/json'
    }, 
    body: JSON.stringify(task)
  })
  .then((res) => res.json())
  .then((data) => {
   console.log(data, 'data')
   setSubTask([...subTasks, data])
  })

  // console.log(task, 'here')
  // const id = Math.floor(Math.random() * 1000) + 1; 
  // const newTask = {id, ...task}
  // console.log(newTask, 'newTask')
  // setSubTask([...subTasks, newTask])
  // subTasks.map((subtask) => 
  //   subtask.id !== task.id && setInputSubLinkedClicked(!inputSubLinkedClicked) 
  // )

}
// add subtask 
// const addSubTask = (task) => {
//   const id = Math.floor(Math.random() * 1000) + 1; 
//   const newTask = {id, ...task}
//   setMainTask([...subTasks, newTask])
// }

// delete task 
const deleteTask = (id) => {
  console.log(id, 'id')
  fetch(`http://localhost:3000/api/mainTodo/${id}`, {
    mode: 'cors', 
    method: 'DELETE', 
  })
  .then(() => {
    fetch('http://localhost:3000/api/mainTodo')
    .then((res) => res.json())
    .then((data) => {
      setMainTask(data)
  })
})
  // setMainTask(mainTask.filter((task) => task.id !== id))
}
// delete task 
const SubdeleteTask = (id) => {
  fetch(`http://localhost:3000/api/subTodo/${id}`, {
    mode: 'cors', 
    method: 'DELETE', 
  })
  .then(() => {
    fetch('http://localhost:3000/api/subTodo')
    .then((res) => res.json())
    .then((data) => {
      setSubTask(data)
  })
})

  // setMainTask(mainTask.filter((task) => task.id !== id))
}

// gettting current id of main task 
const onPlus = (mainId) => {
  console.log(mainId, 'on click main_id')
  setCurrentMainId("")
  setCurrentMainId(mainId)
  console.log(subTasks, 'subTasks')
  setInputLinkedClicked(!inputLinkedClicked)
}

 // toggle sub taks 
 const toggleSub = (id) => {
  setSubTask(subTasks.map((task) => task.id === id ? {...task, completed: !task.completed} :task
  ))
}
  return (
    <div className="App">
       <Header />
       <div className='container'>
          <div className='mainContainer'>
          <Button color={showAddTask ? '#ff8080' : '#6d8e7c'} text={showAddTask ? 'CLOSE':'ADD TASK'} onClick={() => setShowAddTask(!showAddTask)}/>
            {showAddTask && <AddTask onAdd={addTask} />}
            <Tasks
            mainTasks={mainTask} 
            onDelete={deleteTask} 
            onPlus={onPlus}/>
          </div>
          <div className='subContainer'>
          { inputLinkedClicked ? 
            <SubTaks
            mainTask={mainTask}
            subTasks={subTasks} 
            onDelete={SubdeleteTask} 
            onToggle={toggleSub} 
            currentMainId={currentMainId} 
            onSubPlus={() => setShowASubTask(!showAddSubTask)} showAddSubTask={showAddSubTask}/> : <Left mainTask={mainTask}/>
            }
            {showAddSubTask && <AddSubTask onAdd={onSubPlus} currentMainId={currentMainId} />}
    </div>
    </div>
      <Footer />
  </div>
  );

}

export default App
