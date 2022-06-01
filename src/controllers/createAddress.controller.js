import createAddressService from "../services/addresses/createAddress.service"

export default function createAddress(req, res){
    const address = req.body
    const userIndex = req.userIndex

    const user = createAddressService(userIndex, address)

    return res.json(user)
}