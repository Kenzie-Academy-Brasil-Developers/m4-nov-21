import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const activateUserService = async (tokenAtivacao: string): Promise<void> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            token_ativacao: tokenAtivacao
        }
    })

    if(!user){
        throw new AppError("User not found")
    }

    await userRepository.update({
        id: user.id
    }, {
        ativo: true,
        token_ativacao: ""
    })

}

export default activateUserService