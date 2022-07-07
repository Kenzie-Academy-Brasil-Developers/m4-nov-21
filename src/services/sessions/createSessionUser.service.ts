import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import jwt from "jsonwebtoken"
import { compare } from "bcryptjs"
import { IUserLogin } from "../../interfaces/users";
import { AppError } from "../../errors/AppError";
import "dotenv/config"

const createSessionUserService = async ({email, password}: IUserLogin): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            email: email
        }
    })

    if(!user){
        throw new AppError("Invalid credentials", 403)
    }

    if(!user.ativo){
        throw new AppError("User is not active")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
        throw new AppError("Invalid credentials", 403)
    }

    const token = jwt.sign({
            id: user.id,
            adm: user.adm
        },
        process.env.SECRET_KEY as string,
        {
            expiresIn: "1h"
        }
    )

    return token

}

export default createSessionUserService