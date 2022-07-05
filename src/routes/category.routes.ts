import { Router } from "express";
import { createCategoryController, listCategoryController, listCategoryPropertiesController } from "../controllers/category.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdmUserMiddleware from "../middlewares/isAdmUser.middleware";

const categoryRoutes = Router()

categoryRoutes.post('', ensureAuthMiddleware, isAdmUserMiddleware, createCategoryController)
categoryRoutes.get('', listCategoryController)
categoryRoutes.get('/:id/properties', listCategoryPropertiesController)

export default categoryRoutes