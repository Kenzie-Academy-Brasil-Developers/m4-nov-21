import { Router } from 'express'
import UserController from '../controllers/user.controllers'
import {createAddress, updateAddress} from '../controllers/address.controllers'
import userSchema from '../database/schemas/user.schema'
import schemaValidation from '../middlewares/schemaValidation.middleware'
import authorization from '../middlewares/authorization.middleware'

const userRouter = Router()
const userController = new UserController()

userRouter.post('', schemaValidation(userSchema), userController.store)
userRouter.get('', authorization, userController.index)
userRouter.get('/:id', authorization, userController.show)
userRouter.delete('/:id', authorization, userController.delete)
userRouter.post('/:id/address', authorization, createAddress)
userRouter.patch('/:id/address/:addressId', authorization, updateAddress)

export default userRouter