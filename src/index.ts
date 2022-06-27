let nome = 'Fabio'

let idade = 23

let preco = 19.90

let nascimento = new Date()

let vetor = [1,2,4]

let modulo: string = 'M4'

let vetorMisto: (string | number)[] = [23, 'Fabio', 'M4']

nome = 'Alexandre'

// DEVEMOS EVITAR AO MÁXIMO DE USAR O any type
let id: any = 123
id = '123123-1234-asdf123'

let user: IUser = {
    nome: 'Maykel',
    email: 'maykel@kenzie.com.br',
    endereco: {
        rua: 'Rua 123',
        cep: '7000000',
        numero: 123,
        complemento: 'Complemento'
    }
}

console.log(user.endereco.complemento)

interface IUser {
    nome: string;
    email: string;
    endereco: IEnderecoRequest
}

interface IEnderecoRequest {
    rua: string;
    cep: string;
    numero: number;
    complemento: string;
}

interface IEnderecoResponse extends IEnderecoRequest {
    id: number;
}

type User = {
    nome: string;
    email: string;
    endereco: {
        rua: string;
        cep: string;
        numero: number;
        complemento: string;
    }
}

const getNome = (nome: string): string => {
    return nome
}

console.log(getNome(nome))

const produto = {
    nome: 'Computador',
    preco: 3500
}

interface IProduto {
    nome: string;
    preco?: number
}

const getProduto = ({nome, preco}: IProduto): string => {
    return nome
}

console.log(getProduto({nome: 'TABLET'}))