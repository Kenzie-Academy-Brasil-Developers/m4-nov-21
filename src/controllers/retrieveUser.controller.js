import retrieveUserService from "../services/users/retrieveUser.service"

export default function retrieveUser(req, res){
    const userIndex = req.userIndex

    const user = retrieveUserService(userIndex)

    return res.json(user)
}