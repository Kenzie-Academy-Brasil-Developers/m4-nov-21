import createUserService from "../services/users/createUser.service"
import retrieveUserService from "../services/users/retrieveUser.service"
import listUserService from "../services/users/listUser.service";
import deleteUserService from "../services/users/deleteUser.service";

export async function createUser(req, res){
    
    try {
        const user = await createUserService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export function listUser(req, res){
    const users = listUserService()

    return res.json(users)
}

export function retrieveUser(req, res){
    const userIndex = req.userIndex

    const user = retrieveUserService(userIndex)

    return res.json(user)
}

export function deleteUser(req, res){

    const userIndex = req.userIndex

    deleteUserService(userIndex)

    return res.status(204).send()
}