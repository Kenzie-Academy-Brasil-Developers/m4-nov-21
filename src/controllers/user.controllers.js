import CreateUserService from "../services/users/createUser.service"
import RetrieveUserService from "../services/users/retrieveUser.service"
import ListUserService from "../services/users/listUser.service";
import DeleteUserService from "../services/users/deleteUser.service";

export default class UserController{
    async store(req, res){
        try {
            const createUserService = new CreateUserService()

            const user = await createUserService.execute(req.body)
            return res.status(201).json(user)
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }

    async index(req, res){
        try {
            const listUserService = new ListUserService()

            const users = await listUserService.execute()
        
            return res.json(users)
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }

    async show(req, res){
        try {
            const userId = req.params.id
            const retrieveUserService = new RetrieveUserService()
        
            const user = await retrieveUserService.execute(userId)
        
            return res.json(user)
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }

    async delete(req, res){
        try {
            const userId = req.params.id
            const deleteUserService = new DeleteUserService()
        
            await deleteUserService.execute(userId)
        
            return res.status(204).send()
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}