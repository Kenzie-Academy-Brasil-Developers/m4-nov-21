import { Router } from "express";
import { sendEmailController } from "../controllers/email.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdmUserMiddleware from "../middlewares/isAdmUser.middleware";

const emailRoutes = Router()

emailRoutes.post('', ensureAuthMiddleware, isAdmUserMiddleware, sendEmailController)

export default emailRoutes