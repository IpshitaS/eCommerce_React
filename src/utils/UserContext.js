import { createContext } from "react";


const UserContext = createContext({
    user: {
        name : "Ipshita",
        email : "ipshitashetty@gmail.com",
        mob : "987654321"
}})

//UserContext.displayName = "UserContext"
export default UserContext;