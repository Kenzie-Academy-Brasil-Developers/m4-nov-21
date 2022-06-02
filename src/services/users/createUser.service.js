import { v4 as uuidv4 } from "uuid";
import users from '../../database'
import * as bcrypt from 'bcryptjs'

export default async function createUserService(data){

    const userAlreadyExists = users.find(user => user.email === data.email)

    if(userAlreadyExists){
        throw new Error("User already exists")
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const newUser = {
        id: uuidv4(),
        name: data.name,
        email: data.email,
        isAdm: data.isAdm,
        password: hashedPassword,
        addresses: []
    }

    users.push(newUser)
    
    return newUser
}