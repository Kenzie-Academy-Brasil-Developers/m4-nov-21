import express from "express"
import { v4 as uuidv4 } from "uuid";


const app = express()
app.use(express.json())

const users = []

const verificaUsuarioExiste = (req, res, next) => {
    const userId = req.params.id
    const userIndex = users.findIndex(user => user.id === userId)

    if(userIndex === -1){
        return res.status(404).json({
            message: 'User not found'
        })
    }

    req.userIndex = userIndex

    next()
}

app.post('/users', (req, res) => {
    const user = req.body
    user.id = uuidv4()
    user.addresses = []

    users.push(user)
    
    return res.status(201).json(user)
})

app.get('/users', (req, res) => {
    return res.json(users)
})

app.get('/users/:id', verificaUsuarioExiste, (req, res) => {
    const userIndex = req.userIndex
    return res.json(users[userIndex])
})

app.post('/users/:id/address', verificaUsuarioExiste, (req, res) => {

    const address = req.body
    const userIndex = req.userIndex

    users[userIndex].addresses.push(address)

    return res.json(users[userIndex])
})

app.listen(3000, () => {
    console.log('Executando na porta 3000')
})