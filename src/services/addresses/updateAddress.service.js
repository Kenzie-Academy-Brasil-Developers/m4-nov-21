import database from "../../database"

export default async function updateAddressService(userId, addressId, data){

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

        let query = "UPDATE enderecos SET "
        const keys = Object.keys(data)
        const values = Object.values(data)

        keys.forEach((key, index) => {
            query += `${key} = \$${index+=1}, `
        })
        query = query.slice(0, -2)

        query += ` WHERE id = \$${keys.length+=1} RETURNING *;`
        
        const res = await database.query(
            query,
            [...values, addressId]
        )

        if(!res.rowCount){
            throw new Error("Address not found")
        }

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }

}