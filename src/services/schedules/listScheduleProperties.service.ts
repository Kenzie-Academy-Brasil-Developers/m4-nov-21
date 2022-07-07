import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/AppError";

const listSchedulePropertiesService = async(propertyId: string): Promise<Property> => {

    const propertyRepository = AppDataSource.getRepository(Property)

    const property = await propertyRepository.findOne({
        where: {
            id: propertyId
        },
        relations: {
            schedules: true
        }
    })

    if(!property){
        throw new AppError("Property not found", 404)
    }

    return property

}

export default listSchedulePropertiesService