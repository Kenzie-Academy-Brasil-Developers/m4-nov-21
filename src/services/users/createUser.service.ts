import { IUserRequest,IUser } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { hash } from "bcryptjs"
import { sendEmail } from "../../utils/sendEmail.util"
import { IEmailRequest } from "../../interfaces/emails"

const createUserService = async ({ adm, email, nome, password }: IUserRequest, protocol: string, host: string | undefined): Promise<IUser> => {

    const userRepository = AppDataSource.getRepository(User)

    const hashedPassword = await hash(password, 10)
    const activationToken = (Math.random() + 1).toString(36).substring(2);

    const user = userRepository.create({
        adm,
        email,
        nome,
        password: hashedPassword,
        ativo: false,
        token_ativacao: activationToken
    })

    const emailData: IEmailRequest = {
        subject: "Ativação de usuário",
        text: `<h1>Por favor, ative o seu usuário</h1>
        <h3>Seja bem-vindo ${nome}, ative sua conta clicando no link: ${protocol}://${host}/users/activate/${activationToken} para utilizar o nosso sistema</h3>`,
        to: email
    }

    await sendEmail(emailData)

    await userRepository.save(user)
    
    return user

}

export default createUserService