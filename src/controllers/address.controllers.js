import updateAddressService from "../services/addresses/updateAddress.service"
import createAddressService from "../services/addresses/createAddress.service"

export async function createAddress(req, res){

    try {
        const address = req.body
        const userId = req.params.id
    
        const user = await createAddressService(userId, address)
    
        return res.json(user)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export async function updateAddress(req, res){
    try {
        const userId = req.params.id
        const addressId = req.params.addressId
        const data = req.body

        const address = await updateAddressService(userId, addressId, data)
        
        return res.json(address)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}