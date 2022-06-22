import { Client } from 'pg'
import 'dotenv/config'

const database = new Client(
    process.env.ENV === 'test' ?
    {
        host: 'localhost',
        port: 5432,
        user: 'fabio',
        password: '1234',
        database: 'demos_teste'
    } : 
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB
    }
)

export const connectDatabase = async () => {
    await database.connect()
    console.log('Conectado com sucesso ao banco de dados!')
}

export default database