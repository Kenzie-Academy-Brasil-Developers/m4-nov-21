import { Request, Response } from "express"
import createUserService from "../services/users/createUser.service"
import deleteUserService from "../services/users/deleteUser.service"
import listUserService from "../services/users/listUser.service"
import { instanceToPlain } from "class-transformer"

const createUserController = async (req: Request, res: Response) => {

    const { nome, email, password, adm } = req.body
    const newUser = await createUserService({adm, email, password, nome})
    return res.json(instanceToPlain(newUser))
}

const listUserController = async (req: Request, res: Response) => {
    const users = await listUserService()
    return res.json(instanceToPlain(users))
}

const deleteUserController = async (req: Request, res: Response) => {

    const userId = req.params.userId
    await deleteUserService(userId)
    return res.status(204).send()

}

export { createUserController, listUserController, deleteUserController }