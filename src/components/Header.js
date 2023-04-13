import { useState} from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
    return (
      <a href="/">
        <img
          className="h-24  px-5 py-1"
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
      <div className="p-1 flex space-y-5 justify-between bg-green-400 shadow-lg">
        <Title />
        <div>
          <ul className="flex p-2">
            <li className="p-3 text-lg"><Link to="/" >Home</Link></li>
            <li className="p-3 text-lg"><Link to="/about" >About</Link></li>
            <li className="p-3 text-lg"><Link to="/contact" >Contact</Link></li>
            <li className="p-3 text-lg"><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        {
          (isLoggedIn) ? 
          <button 
            className="p-3 mb-6 m-2 bg-red-300 text-white rounded-xl hover:bg-gray-500" 
            onClick={() => setIsLoggedIn(false)}>
            logout
          </button> :
          <button 
            className="p-3 mb-6 m-2 px-2 bg-red-300 text-white rounded-xl hover:bg-gray-500" 
            onClick={() => setIsLoggedIn(true)}>
            login
          </button>
        }
      </div>
    );
  };
  export default Header;