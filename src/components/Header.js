import { useState} from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
    return (
      <a href="/">
        <img
          className="h-28  px-3 py-2"
          alt="logo"
          src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
        />
      </a>
    );
  };

  const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    return (
      <div className="p-1 flex space-y-5 justify-between bg-green-300 shadow-lg">
        <Title />
        <div>
          <ul className="flex p-2">
            <li className="p-2"><Link to="/" >Home</Link></li>
            <li className="p-2"><Link to="/about" >About</Link></li>
            <li className="p-2"><Link to="/contact" >Contact</Link></li>
            <li className="p-2"><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        {
          (isLoggedIn) ? 
          <button 
            className="p-2 m-2 bg-red-200 text-white rounded-xl hover:bg-gray-500" 
            onClick={() => setIsLoggedIn(false)}>
            logout
          </button> :
          <button 
            className="p-2 m-2 px-2 bg-red-200 text-white rounded-xl hover:bg-gray-500" 
            onClick={() => setIsLoggedIn(true)}>
            login
          </button>
        }
      </div>
    );
  };
  export default Header;