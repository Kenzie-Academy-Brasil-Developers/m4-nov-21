import { json, Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";
import createPropertyService from "../services/properties/createProperty.service";
import listPropertyService from "../services/properties/listProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
    const { tamanho, valor, address }: IPropertyRequest = req.body
    const property = await createPropertyService({tamanho, valor, address})
    return res.json(property)
}

const listPropertyController = async (req: Request, res: Response) => {
    const properties = await listPropertyService()
    return res.json(properties)
}

export { createPropertyController, listPropertyController }