import users from "../../database";
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'

export default async function loginUserService(data){

    const user = users.find(user => user.email === data.email)

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

}