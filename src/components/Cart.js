import { useDispatch, useSelector } from "react-redux";
import CartFood from "./CartFood";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex justify-around m-5 p-5">                       
            <div className="p-2 m-5 shadow-xl w-2/3">
                <span className="font-bold text-2xl flex justify-center">{cartItems.length} Item in cart </span>
                {cartItems.map(item => 
                    <CartFood key={item.id}{...item} />
                )}
            </div> 
            <div className="p-2 m-5 shadow-xl w-80">
                <button className="p-5 m-5 shadow-lg" onClick={() => handleClearCart()}>
                    Clear Cart
                </button>
                <h1 className="p-5 m-5 shadow-lg">Address </h1>
                <h1 className="p-5 m-5 shadow-lg">Payment </h1>
            </div>           
        </div>
    )
}

export default Cart;