import Router from "express"
import { createUserController, deleteUserController, listUserController } from "../controllers/user.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import isAdmUserMiddleware from "../middlewares/isAdmUser.middleware"

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', ensureAuthMiddleware, isAdmUserMiddleware, listUserController)
userRoutes.delete('/:userId', ensureAuthMiddleware, isAdmUserMiddleware, deleteUserController)

export default userRoutes