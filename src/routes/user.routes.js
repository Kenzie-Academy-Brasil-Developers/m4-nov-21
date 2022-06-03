import { Router } from 'express'
import {createUser} from '../controllers/user.controllers'
import {listUser} from '../controllers/user.controllers'
import {retrieveUser} from '../controllers/user.controllers'
import {deleteUser} from '../controllers/user.controllers'
import {createAddress} from '../controllers/address.controllers'
import {updateAddress} from '../controllers/address.controllers'
import verificaUsuarioExiste from '../middlewares/verificaUsuarioExiste.middleware'
import userSchema from '../database/schemas/user.schema'
import schemaValidation from '../middlewares/schemaValidation.middleware'
import authorization from '../middlewares/authorization.middleware'

const userRouter = Router()

userRouter.post('', schemaValidation(userSchema), createUser)
userRouter.get('', authorization, listUser)
userRouter.get('/:id', verificaUsuarioExiste, retrieveUser)
userRouter.delete('/:id', verificaUsuarioExiste, deleteUser)
userRouter.post('/:id/address', verificaUsuarioExiste, createAddress)
userRouter.patch('/:id/address/:addressId', authorization, updateAddress)

export default userRouter