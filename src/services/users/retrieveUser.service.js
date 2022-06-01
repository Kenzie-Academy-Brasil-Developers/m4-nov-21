import users from '../../database'

export default function retrieveUserService(userIndex){
    return users[userIndex]
}