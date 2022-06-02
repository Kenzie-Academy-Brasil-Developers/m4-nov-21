import users from '../../database'
import { v4 as uuidv4 } from "uuid";

export default function createAddressService(userIndex, addressData){
    addressData.id = uuidv4()
    users[userIndex].addresses.push(addressData)

    return users[userIndex]
}