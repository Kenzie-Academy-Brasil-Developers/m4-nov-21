import { Router } from 'express'
import {createUser, listUser, retrieveUser, deleteUser} from '../controllers/user.controllers'
import {createAddress, updateAddress} from '../controllers/address.controllers'
import userSchema from '../database/schemas/user.schema'
import schemaValidation from '../middlewares/schemaValidation.middleware'
import authorization from '../middlewares/authorization.middleware'

const userRouter = Router()

userRouter.post('', schemaValidation(userSchema), createUser)
userRouter.get('', authorization, listUser)
userRouter.get('/:id', authorization, retrieveUser)
userRouter.delete('/:id', authorization, deleteUser)
userRouter.post('/:id/address', authorization, createAddress)
userRouter.patch('/:id/address/:addressId', authorization, updateAddress)

export default userRouter