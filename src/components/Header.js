import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
    return (
      <a href="/">
        <img
          className="logo"
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
      <div className="header">
        <Title />
        <h1>{isOnline ? '🟢' : '🔴'}</h1>
        <div className="nav-items">
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        {
          (isLoggedIn) ? 
          <button onClick={() => setIsLoggedIn(false)}>logout</button> :
          <button onClick={() => setIsLoggedIn(true)}>login</button>
        }
      </div>
    );
  };
  export default Header;