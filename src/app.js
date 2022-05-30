import express from "express"
import { v4 as uuidv4 } from "uuid";


const app = express()
app.use(express.json())

const users = []

app.post('/users', (req, res) => {
    const user = req.body
    user.id = uuidv4()

    users.push(user)
    
    return res.status(201).json(user)
})

app.get('/users', (req, res) => {
    return res.json(users)
})

app.listen(3000, () => {
    console.log('Executando na porta 3000')
})