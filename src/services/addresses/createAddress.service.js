import users from '../../database'

export default function createAddressService(userIndex, addressData){
    users[userIndex].addresses.push(addressData)

    return users[userIndex]
}