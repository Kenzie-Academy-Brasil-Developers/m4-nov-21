import { Router } from 'express'
import {createUser} from '../controllers/user.controllers'
import {listUser} from '../controllers/user.controllers'
import {retrieveUser} from '../controllers/user.controllers'
import {deleteUser} from '../controllers/user.controllers'
import {createAddress} from '../controllers/address.controllers'
import {updateAddress} from '../controllers/address.controllers'
import verifyUserExists from '../middlewares/verifyUserExists.middleware'
import userSchema from '../database/schemas/user.schema'
import schemaValidation from '../middlewares/schemaValidation.middleware'
import authorization from '../middlewares/authorization.middleware'

const userRouter = Router()

userRouter.post('', schemaValidation(userSchema), createUser)
userRouter.get('', authorization, listUser)
userRouter.get('/:id', verifyUserExists, retrieveUser)
userRouter.delete('/:id', verifyUserExists, deleteUser)
userRouter.post('/:id/address', verifyUserExists, createAddress)
userRouter.patch('/:id/address/:addressId', authorization, updateAddress)

export default userRouter