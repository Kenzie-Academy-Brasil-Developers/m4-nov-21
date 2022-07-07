interface IAddressRequest {
    logradouro: string
    cep: string
    numero?: string
    complemento?: string
    cidade: string
    estado: string
}

export interface IPropertyRequest {
    valor: number
    tamanho: number
    address: IAddressRequest
    categoryId: string
}