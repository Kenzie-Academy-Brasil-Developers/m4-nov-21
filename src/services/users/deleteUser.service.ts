import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteUserService = async(userId: string): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: userId})

    if(!user){
        throw new AppError("User not found", 404)
    }

    if(!user.ativo){
        throw new AppError("Inactive user")
    }

    user.ativo = false
    await userRepository.save(user)

}

export default deleteUserService