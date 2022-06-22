import users from "../database"

const verifyUserExists = (req, res, next) => {
    const userId = req.params.id
    const userIndex = users.findIndex(user => user.id === userId)

    if(userIndex === -1){
        return res.status(404).json({
            message: 'User not found'
        })
    }

    req.userIndex = userIndex

    next()
}

export default verifyUserExists