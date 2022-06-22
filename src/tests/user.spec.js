import app from '../app'
import request from 'supertest'

const user = {
    nome: "Joao",
    email: "joao@email.com",
    password: "1234",
    isAdm: false
}

const userLogin = {
    email: "joao@email.com",
    password: "1234",
}

const address = {
    rua: "Rua 1",
    cep: "70000000",
	numero: "123",
	cidade: "Brasilia"
}

const newAddress = {
    rua: "Rua Atualizada"
}

describe("Testando POST na rota /users", () => {
    it("POST /users -> Deve ser capaz de criar um usuário com sucesso", async () => {
        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        user.id = response.body.id
    })
})

describe("Testando rota POST /login", () => {
    it("Testando login válido", async () => {
        const response = await request(app).post("/login").send(userLogin);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("token");
        expect(typeof response.body.token).toBe("string");
        userLogin.token = response.body.token
    });

    it("Testando login inválido", async () => {
        userLogin.password = "123";
        const response = await request(app).post("/login").send(userLogin);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message");
        userLogin.password = "1234";
    });
});

describe("Testando rota GET /users", () => {
    it("Testando listagem de usuários", async () => {
        const response = await request(app)
            .get("/users")
            .set("Authorization", `Bearer ${userLogin.token}`);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it("Testando listagem de usuários sem token", async () => {
        const response = await request(app).get("/users");

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty(
            "message"
        );
    });
})

describe("Testando rota POST de /users/<user_id>/addresses", () => {
    it("Testando cadastro de um novo endereço", async () => {

        const response = await request(app).post(`/users/${user.id}/address`).send(address).set("Authorization", `Bearer ${userLogin.token}`)

        expect(response.status).toBe(200)
        expect(response.body.name).toBe(user.name)
        expect(response.body.addresses).toBeInstanceOf(Array)
        expect(response.body.addresses.length).toBe(1)
        expect(response.body.addresses[0]).toHaveProperty("id")
        address.id = response.body.addresses[0].id
    })
})

describe("Testando rota PATCH de /users/<user_id>/addresses/<address_id>", () => {
    it("Testando atualizaçao de endereço passando id correto", async() => {
        const response = await request(app).patch(`/users/${user.id}/address/${address.id}`).send(newAddress).set("Authorization", `Bearer ${userLogin.token}`);

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("id")
        expect(response.body.name).toBe(newAddress.name)
    })
    it("Testando atualizaçao de endereço com id incorreto", async() => {
        const incorrectId = "1234"
        const response = await request(app).patch(`/users/${user.id}/address/${incorrectId}`).send(newAddress).set("Authorization", `Bearer ${userLogin.token}`);

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
    })
})