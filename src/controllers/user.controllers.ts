import { Request, Response } from "express"
import createUserService from "../services/users/createUser.service"
import deleteUserService from "../services/users/deleteUser.service"
import listUserService from "../services/users/listUser.service"
import { instanceToPlain } from "class-transformer"
import activateUserService from "../services/users/activateUser.service"
import sendResetUserPasswordService from "../services/users/sendResetUserPassword.service"
import resetUserPasswordService from "../services/users/resetUserPassword.service"

const createUserController = async (req: Request, res: Response) => {

    const { nome, email, password, adm } = req.body
    const protocol = req.protocol
    const host = req.get('host')
    const newUser = await createUserService({adm, email, password, nome}, protocol, host)
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


const activateUserController = async (req: Request, res: Response) => {

    const tokenAtivacao = req.params.token_ativacao
    await activateUserService(tokenAtivacao)
    return res.json({
        message: "User activated with success"
    })

}

const sendResetUserPasswordController = async (req: Request, res: Response) => {
    const {email} = req.body
    const protocol = req.protocol
    const host = req.get('host')
    await sendResetUserPasswordService(email, protocol, host)
    return res.json({
        message: "Token send"
    })
}

const resetUserPasswordController = async (req: Request, res: Response) => {
    const {token} = req.params
    const {newPassword} = req.body
    await resetUserPasswordService(token, newPassword)
    return res.json({
        message: "Password changed"
    })
}

export { createUserController, listUserController, deleteUserController, activateUserController, sendResetUserPasswordController, resetUserPasswordController }