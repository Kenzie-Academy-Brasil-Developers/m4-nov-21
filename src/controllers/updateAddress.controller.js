import updateAddressService from "../services/addresses/updateAddress.service"

export default function updateAddress(req, res){
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