import listUserService from "../services/users/listUser.service";

export default function listUser(req, res){
    const users = listUserService()

    return res.json(users)
}