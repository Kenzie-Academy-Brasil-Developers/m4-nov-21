import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/AppError";

const listCategoryPropertiesService = async (id: string): Promise<Category> => {
    const categoryRepository = AppDataSource.getRepository(Category)
    const categorie = await categoryRepository.findOne({
        where: {
            id: id
        },
        relations: {
            properties: true
        }
    })

    if(!categorie){
        throw new AppError("Category not found", 404)
    }

    return categorie
}

export default listCategoryPropertiesService