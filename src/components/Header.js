import { useState} from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

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
    //const isOnline = useOnline();

    const cartItem = useSelector(store => store.cart.items);
    console.log(cartItem);
    
    return (
      <div className="px-14 flex space-y-5 justify-between bg-green-400 shadow-lg">
        <Title />
        <div>
          <ul className="flex p-2">
            <li className="p-2 text-lg hover:bg-red-300 rounded-r">
              <Link to="/" >
                {/* <img className="w-8" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&usqp=CAU" /> */}
                Home
              </Link>
            </li>
            <li className="p-2 text-lg hover:bg-red-300">
              <Link to="/about" >About</Link>
            </li>
            <li className="p-2 text-lg hover:bg-red-300">
              <Link className=" flex" to="/contact" >
                <img className="w-10" src ="https://cdn-icons-png.flaticon.com/512/3095/3095583.png" /> 
              </Link>
            </li>
            <li className="p-2 text-lg hover:bg-red-300">
              <Link className=" flex" to="/cart">
                <img className="w-10" src ="https://cdn-icons-png.flaticon.com/512/34/34627.png" /> 
                {cartItem.length}
              </Link>
            </li>
            {
          (isLoggedIn) ? 
          <button 
            className="p-2 text-lg hover:bg-red-300" 
            onClick={() => setIsLoggedIn(false)}>
            logout
          </button> :
          <button 
            className="p-2 text-lg font-bold flex hover:bg-red-300" 
            onClick={() => setIsLoggedIn(true)}>
              {/* <img className="w-8" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&usqp=CAU" /> */}
            Ipshita
          </button>
        }
          </ul>
        </div>
        
      </div>
    );
  };
  export default Header;