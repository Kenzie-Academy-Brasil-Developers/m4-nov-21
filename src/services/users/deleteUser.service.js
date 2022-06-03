import users from "../../database";

export default function deleteUserService(userIndex){
    users.splice(userIndex, 1)

    return true
}