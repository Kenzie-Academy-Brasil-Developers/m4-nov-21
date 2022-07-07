import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import app from "../../app";
import request from "supertest"
import { IPropertyRequest } from "../../interfaces/properties";
import { ICategoryRequest } from "../../interfaces/categories";

const property: IPropertyRequest = {
    valor: 1000000,
    tamanho: 350,
    address: {
        logradouro: "Rua 22",
        cep: "7600000",
        numero: "111",
        complemento: "Em frente ao mercado",
        cidade: "Goiania",
        estado: "GO"
    },
    categoryId: ""
}

const category: ICategoryRequest = {
    nome: "Casa"
}

describe("Manipulate properties", () => {
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

    test("Should be able to create an category",async () => {
        const response = await request(app).post('/categories').send(category)

        expect(response.body).toHaveProperty("id")
        property.categoryId = response.body.id
    })

    test("Should be able to create an property", async() => {
        const response = await request(app).post('/properties').send(property)

        expect(response.body).toHaveProperty("id")
        expect(response.body.category.nome).toEqual("Casa")
    })

    test("Should be able to return a address already exists", async() => {
        const response = await request(app).post('/properties').send(property)

        expect(response.body.message).toEqual("Address already exists")
    })

})