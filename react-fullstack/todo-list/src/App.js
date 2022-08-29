import { useState, useEffect } from "react"
import Header from "./components/Header.jsx"
import Tasks from "./components/Tasks.jsx"
import Footer from "./components/Footer.jsx"
import SubTaks from "./components/SubTaks.jsx"
import AddSubTask from "./components/AddSubTask.jsx"
import Left from "./components/Left.jsx"
import Categories from "./components/Categories.jsx"
import CatBtn from "./components/CatBtn.jsx"
import AddCat from "./components/AddCat.jsx"

function App() {
  // we have a boolean that show if a taks is added
  const [showAddCat, setShowAddCat] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  const [showAddSubTask, setShowASubTask] = useState(false)

  const [currentCat, setCurrentCat] = useState([])
  const [currentMainId, setCurrentMainId] = useState([])
  const [currentSubId, setCurrentSubId] = useState([])

  const [inputCatLinkedClicked, setInputCatLinkedClicked] = useState(false)
  const [inputLinkedClicked, setInputLinkedClicked] = useState(false)
  const [inputSubLinkedClicked, setInputSubLinkedClicked] = useState(false)

  const [categories, setCategories] = useState([])
  //  console.log(categories, 'categories')
  const [mainTask, setMainTask] = useState([])
  // console.log(mainTask, 'after main taks')
  const [subTasks, setSubTask] = useState([])
  // console.log(subTasks, 'subTasks');

  useEffect(() => {
    fetch("http://localhost:3000/api/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
      })
    fetch("http://localhost:3000/api/mainTodo")
      .then((res) => res.json())
      .then((data) => {
        setMainTask(data)
      })
    fetch("http://localhost:3000/api/subTodo")
      .then((res) => res.json())
      .then((data) => {
        setSubTask(data)
      })
  }, [])

  // add category
  const addCat = (cat) => {
    // console.log(task, 'task here')
    fetch("http://localhost:3000/api/category", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cat),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data")
        setCategories([...categories, data])
      })
  }

  // add task
  const addTask = (task) => {
    console.log(task, "task here")
    fetch("http://localhost:3000/api/mainTodo", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data")
        setMainTask([...mainTask, data])
      })
  }
  // adding sub task
  const onSubPlus = (task) => {
    console.log(task, "onSubPlus")
    fetch("http://localhost:3000/api/subTodo", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data")
        setSubTask([...subTasks, data])
      })
  }

  // deleting a category
  const deleteCat = (id) => {
    console.log(id, "id")
    fetch(`http://localhost:3000/api/category/${id}`, {
      mode: "cors",
      method: "DELETE",
    }).then(() => {
      fetch("http://localhost:3000/api/category")
        .then((res) => res.json())
        .then((data) => {
          setCategories(data)
        })
    })
  }

  // delete task
  const deleteTask = (id) => {
    console.log(id, "id")
    fetch(`http://localhost:3000/api/mainTodo/${id}`, {
      mode: "cors",
      method: "DELETE",
    }).then(() => {
      fetch("http://localhost:3000/api/mainTodo")
        .then((res) => res.json())
        .then((data) => {
          setMainTask(data)
        })
    })
  }
  // delete task
  const SubdeleteTask = (id) => {
    fetch(`http://localhost:3000/api/subTodo/${id}`, {
      mode: "cors",
      method: "DELETE",
    }).then(() => {
      fetch("http://localhost:3000/api/subTodo")
        .then((res) => res.json())
        .then((data) => {
          setSubTask(data)
        })
    })
  }
  // gettug current id of category
  const CatId = (catId) => {
    setCurrentCat("")
    setCurrentCat(catId)
    setInputCatLinkedClicked(!inputCatLinkedClicked)
  }
  // gettting current id of main task
  const onPlus = (mainId) => {
    console.log(mainId, "on click main_id")
    setCurrentMainId("")
    setCurrentMainId(mainId)
    setInputLinkedClicked(!inputLinkedClicked)
  }

  // toggle sub taks
  const toggleSub = (id) => {
    setSubTask(
      subTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="CatContainer"></div>
        <div className="mainContainer">
          <CatBtn
            color={showAddCat ? "#ff8080" : "#6d8e7c"}
            text={showAddCat ? "CLOSE" : "ADD CATEGORY"}
            onClick={() => setShowAddCat(!showAddCat)}
          />
          {showAddCat && <AddCat onAdd={addCat} />}
          <Categories
            categorys={categories}
            onDelete={deleteCat}
            onPlus={CatId}
          />
        </div>
        <div className="subContainer">
          {inputLinkedClicked ? (
            <SubTaks
              mainTask={mainTask}
              subTasks={subTasks}
              onClick={() => setInputLinkedClicked(!inputLinkedClicked)}
              onDelete={SubdeleteTask}
              onToggle={toggleSub}
              currentMainId={currentMainId}
              onSubPlus={() => setShowASubTask(!showAddSubTask)}
              showAddSubTask={showAddSubTask}
            />
          ) : inputCatLinkedClicked ? (
            <Tasks
              showAddTask={showAddTask}
              setShowAddTask={setShowAddTask}
              currentCat={currentCat}
              onAdd={addTask}
              mainTasks={mainTask}
              onDelete={deleteTask}
              onPlus={onPlus}
            />
          ) : (
            <Left />
          )}
          {showAddSubTask && (
            <AddSubTask onAdd={onSubPlus} currentMainId={currentMainId} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
