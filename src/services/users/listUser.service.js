import database from '../../database'

export default async function listUserService(){
    try {
        const res = await database.query(`
            SELECT
                id, nome, email, isAdm
            FROM
                usuarios;
        `)

        return res.rows

    } catch (error) {
        throw new Error(error)
    }
}