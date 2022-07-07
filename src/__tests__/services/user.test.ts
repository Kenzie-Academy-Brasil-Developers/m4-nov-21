import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/users"
import createUserService from "../../services/users/createUser.service"
import deleteUserService from "../../services/users/deleteUser.service";
import { v4 as uuidv4 } from "uuid"
import { AppError } from "../../errors/AppError"

describe("Manipulate user", () => {
    
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })
    
    test("Should be able to create an user", async () => {
        const userData: IUserRequest = {
            adm: false,
            email: "fabio@kenzie.com",
            nome: "Fabio",
            password: "1234"
        }

        const newUser = await createUserService(userData)

        expect(newUser).toHaveProperty("id")
        expect(newUser.nome).toBe("Fabio")

    })

    test("Should be able to thown an error in case of user not found", async () => {
        try {
            const userId = uuidv4()
            await deleteUserService(userId)
        } catch (error) {
            if(error instanceof AppError){
                expect(error.message).toBe("User not found")
            }
        }
    })
})