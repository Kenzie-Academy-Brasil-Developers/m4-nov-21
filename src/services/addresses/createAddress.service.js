import database from '../../database'
import { v4 as uuidv4 } from "uuid";

export default async function createAddressService(userId, data){
    try {

        const findUser = await database.query(
            `SELECT
                *
            FROM
                usuarios
            WHERE
                id = $1`,
            [userId]
        )

        if(!findUser.rowCount){
            throw new Error("User not found")
        }
        
        const res = await database.query(
            `INSERT INTO
                enderecos (id, rua, cep, numero, cidade, usuario_id)
            VALUES
                ($1, $2, $3, $4, $5, $6)
            RETURNING *;`,
            [uuidv4(), data.rua, data.cep, data.numero, data.cidade, userId]
        )

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}