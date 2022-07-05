import "reflect-metadata"
import "express-async-errors"
import express from "express"
import handleAppErrorMiddeware from "./middlewares/handleAppError.middleware"
import userRoutes from "./routes/user.routes"
import sessionRoutes from "./routes/session.routes"
import propertyRoutes from "./routes/property.routes"
import categoryRoutes from "./routes/category.routes"

const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', sessionRoutes)
app.use('/properties', propertyRoutes)
app.use('/categories', categoryRoutes)

app.use(handleAppErrorMiddeware)

app.listen(3000, () => {
    console.log("Servidor executando")
})