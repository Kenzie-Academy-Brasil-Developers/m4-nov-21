import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";

const listPropertyService = async (): Promise<Property[]> => {
    const propertyReposity = AppDataSource.getRepository(Property)
    const properties = await propertyReposity.find({
        where: {
            vendido: false
        }
    })

    return properties

}

export default listPropertyService