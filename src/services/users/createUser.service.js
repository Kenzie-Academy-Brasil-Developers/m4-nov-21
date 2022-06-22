import { v4 as uuidv4 } from "uuid";
import users from '../../database'
import * as bcrypt from 'bcryptjs'
import database from "../../database";

export default async function createUserService(data){

    const hashedPassword = await bcrypt.hash(data.password, 10)

    try {
        
        const res = await database.query(
            `INSERT INTO
                usuarios (id, nome, email, isAdm, password)
            VALUES
                ($1, $2, $3, $4, $5)
            RETURNING *`,
            [uuidv4(), data.nome, data.email, data.isAdm, hashedPassword]
        )

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }

}