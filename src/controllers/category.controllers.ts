import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoryService from "../services/categories/listCategory.service";
import listCategoryPropertiesService from "../services/categories/listCategoryProperties.service";

const createCategoryController = async (req: Request, res: Response) => {
    const {nome}: ICategoryRequest = req.body
    const category = await createCategoryService({nome})
    return res.json(category)
}

const listCategoryController = async (req: Request, res: Response) => {
    const categories = await listCategoryService()
    return res.json(categories)
}

const listCategoryPropertiesController = async (req: Request, res: Response) => {
    const {id} = req.params
    const category = await listCategoryPropertiesService(id)
    return res.json(category)
}

export { createCategoryController, listCategoryController, listCategoryPropertiesController }