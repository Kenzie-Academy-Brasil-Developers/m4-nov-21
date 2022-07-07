import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { Category } from "../../entities/category.entity";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties"

const createPropertyService = async ({valor, tamanho, address, categoryId}: IPropertyRequest): Promise<Property> => {

    const propertyRepository = AppDataSource.getRepository(Property)
    const addressRepository = AppDataSource.getRepository(Address)
    const categoryRepository = AppDataSource.getRepository(Category)

    const findAddress = await addressRepository.findOne({
        where: {
            cep: address.cep,
            cidade: address.cidade,
            complemento: address.complemento,
            estado: address.estado,
            logradouro: address.logradouro,
            numero: address.numero
        }
    })

    if(findAddress){
        throw new AppError("Address already exists")
    }

    const category = await categoryRepository.findOneBy({
        id: categoryId
    })

    if(!category){
        throw new AppError("Category not found", 404)
    }

    const propertyAddress = addressRepository.create({
        cep: address.cep,
        cidade: address.cidade,
        complemento: address.complemento,
        estado: address.estado,
        logradouro: address.logradouro,
        numero: address.numero
    })

    await addressRepository.save(propertyAddress)

    const property = propertyRepository.create({
        tamanho: tamanho,
        valor: valor,
        address: propertyAddress,
        category: category
    })

    await propertyRepository.save(property)

    return property

}

export default createPropertyService