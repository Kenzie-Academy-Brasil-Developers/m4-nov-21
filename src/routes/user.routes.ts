import Router from "express"
import { activateUserController, createUserController, deleteUserController, listUserController, resetUserPasswordController, sendResetUserPasswordController } from "../controllers/user.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import isAdmUserMiddleware from "../middlewares/isAdmUser.middleware"

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', ensureAuthMiddleware, isAdmUserMiddleware, listUserController)
userRoutes.delete('/:userId', ensureAuthMiddleware, isAdmUserMiddleware, deleteUserController)
userRoutes.get('/activate/:token_ativacao', activateUserController)
userRoutes.post('/resetPassword', sendResetUserPasswordController)
userRoutes.patch('/password/:token', resetUserPasswordController)

export default userRoutes