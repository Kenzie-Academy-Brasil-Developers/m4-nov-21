import LoginUserService from "../services/sessions/loginUser.service"

export default class AuthController{
    async store(req, res){
        try {
            const loginUserService = new LoginUserService()
            const token = await loginUserService.execute(req.body)
            return res.json({token})
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}