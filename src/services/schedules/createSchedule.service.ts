import AppDataSource from "../../data-source";
import { Schedule } from "../../entities/schedule.entity";
import { User } from "../../entities/user.entity";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async ({horario_visita, propertyId, userId}: IScheduleRequest): Promise<void> => {

    const propertyRepository = AppDataSource.getRepository(Property)
    const userRepository = AppDataSource.getRepository(User)
    const scheduleRepository = AppDataSource.getRepository(Schedule)

    const property = await propertyRepository.findOneBy({
        id: propertyId
    })

    if(!property){
        throw new AppError("Property not found", 404)
    }

    const user = await userRepository.findOneBy({
        id: userId
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    const findUserSchedule = await userRepository.createQueryBuilder('users')
    .leftJoinAndSelect('users.schedules', 'schedules')
    .where('users.id = :id', {id: userId})
    .andWhere('schedules.horario_visita = :horario_visita', {horario_visita: horario_visita})
    .getOne()

    if(findUserSchedule){
        throw new AppError("User schedule already exists")
    }

    const findPropertySchedule = await propertyRepository.createQueryBuilder('properties')
    .leftJoinAndSelect('properties.schedules', 'schedules')
    .where('properties.id = :id', {id: propertyId})
    .andWhere('schedules.horario_visita = :horario_visita', {horario_visita: horario_visita})
    .getOne()

    if(findPropertySchedule){
        throw new AppError("Property schedule already exists")
    }

    await scheduleRepository.save({
        horario_visita,
        property,
        user
    })

}

export default createScheduleService