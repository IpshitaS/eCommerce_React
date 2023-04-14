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
            <div className="p-2 m-5 shadow-lg">
                <span>Item cart {cartItems.length}</span>
                {cartItems.map(item => 
                    <CartFood key={item.id}{...item} />
                )}
            </div> 
            <div className="p-2 m-5 shadow-lg">
                <button onClick={() => handleClearCart()}>
                    Clear Cart
                </button>
            </div>           
        </div>
    )
}

export default Cart;