import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext)
    return (
      <div className="bg-slate-500 text-center flex justify-between">
        <h1 className="m-1 p-1 px-10">Thanks for visiting our page😍 Have a nice day😊</h1>
        <h1 className="m-1 p-1 px-10">You can also give us feedback💜 to : {user.email}</h1>
      </div>
    );
  };
  
  export default Footer;