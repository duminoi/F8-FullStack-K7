const express = require('express')
const {query} = require("express");
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        salary: 1000
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        salary: 2000
    }
]
app.use(bodyParser.json())

app.get('/users/', (req, res) => {
    const {name} = req.query
    if(name){
        res.send(users.filter(user =>user.name.includes(name)))
        return
    }
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    console.log("1234", (req.params))
    const {id} = req.params
    res.send(users.find(user => user.id === Number(id)))
})
app.post("/users/",(req, res) =>{
    console.log("vào dây",req.body)
    const newUser = {...req.body,id:4}
    users.push(newUser)
    res.send(newUser)
})

app.delete("/users/:id", (req, res)=>{
    const {id} = req.params
    const index = users.findIndex(users=>users.id === Number(id))
    users.splice(index, 1)
    res.send({msg: "user have been delete"})
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log("hello ")