import { IUser, IUserRequest } from "../../interfaces/users"
import { users } from "../../database"
import { v4 as uuidv4 } from "uuid"

const createUserService = ({ adm, email, nome, password }: IUserRequest): IUser => {
    const newUser: IUser = {
        id: uuidv4(),
        nome,
        email,
        adm,
        password,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    users.push(newUser)
    return newUser
}

export default createUserService