import { IUserRequest,IUser } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { hash } from "bcryptjs"

const createUserService = async ({ adm, email, nome, password }: IUserRequest): Promise<IUser> => {

    const userRepository = AppDataSource.getRepository(User)

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        adm,
        email,
        nome,
        password: hashedPassword,
        ativo: true
    })

    await userRepository.save(user)
    
    return user

}

export default createUserService