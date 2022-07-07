import { Request, Response } from "express";
import createScheduleService from "../services/schedules/createSchedule.service";
import listSchedulePropertiesService from "../services/schedules/listScheduleProperties.service";

const createScheduleController = async (req: Request, res: Response) => {
    const { horario_visita, propertyId } = req.body
    const userId = req.user.id

    await createScheduleService({horario_visita, propertyId, userId})

    return res.json({
        message: "Schedule created"
    })
}

const listSchedulePropertiesController = async (req: Request, res: Response) => {

    const dia = req.query.dia
    const id = req.params.id
    const scheduleProperty = await listSchedulePropertiesService(id)
    console.log(dia)
    return res.json(scheduleProperty)

}

export { createScheduleController, listSchedulePropertiesController }