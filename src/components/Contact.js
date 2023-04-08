import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
    const {user} = useContext(UserContext)
    return (
        <span>email Id : {user.email} <br/> mobile no. : {user.mob}</span>
    )
}

export default Contact;