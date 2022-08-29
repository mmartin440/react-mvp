import express from 'express'; 
import pg from 'pg'; 
import cors from 'cors'; 
import dotenv from 'dotenv'; 

dotenv.config()
const app = express(); 
const PORT = process.env.PORT
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ...(process.env.NODE_ENV === "production"
      ? {
          ssl: {
            rejectUnauthorized: false,
          },
        }
      : {}),
  })

app.use(express.json()); 
app.use(cors()); 
const unkownHttp = (req, res, next) => {
    res.sendStatus(404)
    // console.log('unknowHttp was used 404')
    next()
  }


// get main to do list 
app.get("/api/mainTodo", (req, res, next) => {
    pool.query('SELECT * FROM mainTodo').then((data) => {
        res.send(data.rows);
    }).catch(next); 
})
// get sub to do list 
app.get("/api/subTodo", (req, res,next) => {
    pool.query('SELECT * FROM subTodo').then((data) =>{
        res.send(data.rows); 
    }).catch(next); 
})

// add to main task 
app.post('/api/mainTodo', (req, res, next) => {
    const newTodo = req.body;
    console.log(newTodo) 
    if(newTodo.main_todo && newTodo.due_date) {
        console.log('hello'); 
        pool.query('INSERT INTO mainTodo (main_todo, due_date) VALUES ($1, $2) RETURNING *', [newTodo.main_todo, newTodo.due_date]).then((data) => {
            res.status(201).send(data.rows[0])
        })
        .catch(next); 
    } else (
        res.status(400).send('Incorrect format')
    )
}); 

// add to subtask
app.post('/api/subTodo', (req, res, next) => {
    const newTodo = req.body; 
    if(newTodo.sub_todo && newTodo.main_id) {
        pool.query('INSERT INTO subTodo (sub_todo, main_id) VALUES ($1, $2) RETURNING *', [newTodo.sub_todo, newTodo.main_id]).then((data) => {
            res.status(201).send(data.rows[0])
        })
        .catch(next); 
    } else (
        res.status(400).send('Incorrect format')
    )
}); 

// delete main 
app.delete('/api/mainTodo/:id', (req, res, next) => {
    const delteTask = req.params.id
    pool.query('DELETE FROM mainTodo WHERE id=$1 RETURNING *', [delteTask]).then((data) => {
        if (data.rows.length === 0) {
            res.sendStatus(404)
          } else {
            res.status(204).send(data.rows[0])
          }
    })
})

// delete sub
app.delete('/api/subTodo/:id', (req, res, next) => {
    const delteTask = req.params.id
    pool.query('DELETE FROM subTodo WHERE id=$1 RETURNING *', [delteTask]).then((data) => {
        if (data.rows.length === 0) {
            res.sendStatus(404)
          } else {
            res.sendStatus(204)
          }
    })
})







app.use((err, req, res, next) => {
    res.sendStatus(500); 
})

 // nodemon server.js
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
app.use(unkownHttp)
