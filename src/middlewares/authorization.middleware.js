import jwt from 'jsonwebtoken'

const authorization = (req, res, next) => {
    
    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: "Invalid token"
        })
    }

    token = token.split(" ")[1]

    jwt.verify(token, "sdfDFG!@#%ASDFAS", (error, decoded) => {
        if(error){
            return res.status(401).json({
                message: "Invalid token"
            })
        }

        req.user = {
            id: decoded.sub,
            isAdm: decoded.isAdm
        }

        next()
    })
}

export default authorization