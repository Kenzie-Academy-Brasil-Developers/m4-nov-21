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

export async function listUser(req, res){
    try {
        const users = await listUserService()
    
        return res.json(users)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export async function retrieveUser(req, res){

    try {
        const userId = req.params.id
    
        const user = await retrieveUserService(userId)
    
        return res.json(user)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export async function deleteUser(req, res){

    try {
        const userId = req.params.id
    
        await deleteUserService(userId)
    
        return res.status(204).send()
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}