import { Request, Response } from "express";
import createSessionUserService from "../services/sessions/createSessionUser.service";

const createUserSessionController = async (req: Request, res: Response) => {

    const { email, password } = req.body
    const token = await createSessionUserService({email, password})

    return res.json({token})

}

export { createUserSessionController }