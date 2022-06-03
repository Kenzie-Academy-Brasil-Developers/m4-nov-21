import loginUserService from "../services/sessions/loginUser.service"

export async function loginUser(req, res){

    try {
        const token = await loginUserService(req.body)
        return res.json({token})
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}