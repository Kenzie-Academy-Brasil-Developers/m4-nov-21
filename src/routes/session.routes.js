import { Router } from 'express'
import loginUser from '../controllers/loginUser.controller'
import schemaValidation from '../middlewares/schemaValidation.middleware'
import loginSchema from '../database/schemas/login.schema'

const sessionRouter = Router()

sessionRouter.post('', schemaValidation(loginSchema), loginUser)

export default sessionRouter