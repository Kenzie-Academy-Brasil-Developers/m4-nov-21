import { Router } from "express";
import { createPropertyController, listPropertyController } from "../controllers/property.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdmUserMiddleware from "../middlewares/isAdmUser.middleware";

const propertyRoutes = Router()

propertyRoutes.post('', ensureAuthMiddleware, isAdmUserMiddleware, createPropertyController)
propertyRoutes.get('', listPropertyController)

export default propertyRoutes