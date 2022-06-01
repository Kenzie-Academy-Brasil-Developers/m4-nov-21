import { v4 as uuidv4 } from "uuid";
import users from '../../database'

export default function createUserService(data){
    data.id = uuidv4()
    data.addresses = []

    const userAlreadyExists = users.find(user => user.email === data.email)

    if(userAlreadyExists){
        throw new Error("User already exists")
    }

    users.push(data)
    
    return data
}