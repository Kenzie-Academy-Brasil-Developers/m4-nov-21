import database from "../../database";
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'

export default async function loginUserService(data){

    try {

        const res = await database.query(
            `SELECT
                *
            FROM
                usuarios
            WHERE
                email = $1;`,
            [data.email]
        )

        const user = res.rows[0]
    
        if(!user){
            throw new Error("Invalid user or password")
        }
    
        const passwordMatch = await bcrypt.compare(data.password, user.password)
    
        if(!passwordMatch){
            throw new Error("Invalid user or password")
        }
    
        const token = jwt.sign({
            isAdm: user.isAdm
        }, "sdfDFG!@#%ASDFAS", {
            expiresIn: "24h",
            subject: user.id
        })
    
        return token
    } catch (error) {
        throw new Error(error)
    }


}