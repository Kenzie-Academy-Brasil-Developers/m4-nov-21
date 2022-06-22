import express from "express"
import userRouter from "./routes/user.routes"
import sessionRouter from "./routes/session.routes"
import { connectDatabase } from "./database"

const app = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('/login', sessionRouter)

app.listen(process.env.ENV === 'test' ? 3001 : 3000, () => {
    console.log('Executando na porta 3000')
    connectDatabase()
})

export default app