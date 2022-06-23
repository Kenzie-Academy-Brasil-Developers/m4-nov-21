import { Router } from 'express'
import AuthController from '../controllers/auth.controllers'
import schemaValidation from '../middlewares/schemaValidation.middleware'
import loginSchema from '../database/schemas/login.schema'

const sessionRouter = Router()
const authController = new AuthController()

sessionRouter.post('', schemaValidation(loginSchema), authController.store)

export default sessionRouter