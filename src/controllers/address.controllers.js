import updateAddressService from "../services/addresses/updateAddress.service"
import createAddressService from "../services/addresses/createAddress.service"

export function updateAddress(req, res){
    try {
        const userId = req.user.id
        const addressId = req.params.addressId
        const data = req.body

        const address = updateAddressService(userId, addressId, data)
        
        return res.json(address)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export function createAddress(req, res){
    const address = req.body
    const userIndex = req.userIndex

    const user = createAddressService(userIndex, address)

    return res.json(user)
}