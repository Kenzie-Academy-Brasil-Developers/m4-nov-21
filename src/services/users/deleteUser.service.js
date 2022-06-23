import database from "../../database";

export default async function deleteUserService(userId){
    try {
        const res = await database.query(
            `DELETE FROM
                usuarios
            WHERE
                id = $1
            RETURNING *;`,
            [userId]
        )

        if(!res.rowCount){
            throw new Error("User not found")
        }

    } catch (error) {
        throw new Error(error)
    }
}