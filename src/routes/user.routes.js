import { Router } from 'express'
import createAddress from '../controllers/createAddress.controller'
import createUser from '../controllers/createUser.controller'
import listUser from '../controllers/listUser.controller'
import retrieveUser from '../controllers/retrieveUser.controller'
import verificaUsuarioExiste from '../middlewares/verificaUsuarioExiste.middleware'
import userSchema from '../database/schemas/user.schema'
import schemaValidation from '../middlewares/schemaValidation.middleware'

const userRouter = Router()

userRouter.post('', schemaValidation(userSchema), createUser)
userRouter.get('', listUser)
userRouter.get('/:id', verificaUsuarioExiste, retrieveUser)
userRouter.post('/:id/address', verificaUsuarioExiste, createAddress)

export default userRouter