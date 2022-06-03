import users from "../../database"

export default function updateAddressService(userId, addressId, data){

    const user = users.find(user => user.id === userId)

    if(!user){
        throw new Error("User not found")
    }

    const addresses = user.addresses

    const addressIndex = addresses.findIndex(address => address.id === addressId)

    if(addressIndex === -1){
        throw new Error("Address not found")
    }
    
    addresses[addressIndex] = {
        ...data,
        ...addresses[addressIndex]
    }

    return addresses[addressIndex]

}