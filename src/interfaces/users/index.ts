export interface IUserRequest {
    nome: string
    email: string
    password: string
    adm: boolean
}

export interface IUser extends IUserRequest {
    id: string
    createdAt: Date
    updatedAt: Date
}