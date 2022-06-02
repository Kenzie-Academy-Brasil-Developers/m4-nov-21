import createUserService from "../services/users/createUser.service"

export default async function createUser(req, res){
    
    try {
        const user = await createUserService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}