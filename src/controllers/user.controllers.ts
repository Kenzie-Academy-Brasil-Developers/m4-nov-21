import { Request, Response } from "express"
import createUserService from "../services/users/createUser.service"
import listUserService from "../services/users/listUser.service"

const createUserController = async (req: Request, res: Response) => {
    try {
        const { nome, email, password, adm } = req.body
        const newUser = await createUserService({adm, email, password, nome})
        return res.json(newUser)
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

const listUserControllers = async (req: Request, res: Response) => {
    const users = await listUserService()
    return res.json(users)
}

export { createUserController, listUserControllers }