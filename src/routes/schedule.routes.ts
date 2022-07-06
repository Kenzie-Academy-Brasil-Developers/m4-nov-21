import { Router } from "express";
import { createScheduleController, listSchedulePropertiesController } from "../controllers/schedule.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdmUserMiddleware from "../middlewares/isAdmUser.middleware";

const scheduleRoutes = Router()

scheduleRoutes.post('', ensureAuthMiddleware, createScheduleController)
scheduleRoutes.get('/properties/:id', ensureAuthMiddleware, isAdmUserMiddleware, listSchedulePropertiesController)

export default scheduleRoutes