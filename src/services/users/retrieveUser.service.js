import database from '../../database'

export default async function retrieveUserService(userId){
    try {
        
        const res = await database.query(
            `SELECT
                id, nome, email, isAdm
            FROM
                usuarios
            WHERE
                id = $1;`,
            [userId]
        )

        if(!res.rowCount){
            throw new Error("User not found")
        }

        return res.rows[0]
        
    } catch (error) {
        throw new Error(error)
    }
    
}