import { users } from "../../database";
import { IUser } from "../../interfaces/users";

const listUserService = (): IUser[] => {
    return users
}

export default listUserService