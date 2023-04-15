import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
    const {user} = useContext(UserContext)
    return (
        <div className="text-lg p-5 m-5 text-center">
        <h1 className="font-bold underline text-xl p-2">Contact :</h1>
        <h1>email Id : {user.email} </h1>
        <h1> mobile no. : {user.mob}</h1>
        </div>
    )
}

export default Contact;