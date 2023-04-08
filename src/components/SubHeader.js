import { Link } from "react-router-dom"

const SubHeader = () => {
    return(
        <div className="bg-green-200 shadow-lg p-1 m-2">
            <ul className="flex justify-between">
                <li 
                    className="p-2 m-2 h-40 w-72 
                    bg-no-repeat bg-contain
                    bg-[url('https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/dvcb4z5wqug9fligbvyv')] ">
                    <Link to="/instamart">InstaMart</Link>
                </li>
                <li 
                    className="p-2 m-2 h-40 w-72
                    bg-no-repeat bg-contain
                    bg-[url('https://postandparcel.info/wp-content/uploads/2016/05/elGrocer.png')]">
                    <Link to="/insta_delivery">Insta Delivery</Link>
                </li>
                <li 
                    className="p-2 m-2 h-40 w-72 
                    bg-no-repeat bg-contain
                    bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuymSkyHJO9PNswqxMHRb1bXRw4FUheBLDwAIOw4UR6ik_WWdUqjJpYBlHhKR2lE4PaY&usqp=CAU')]">
                    <Link to="/fresh_meat">Fresh Meat</Link>
                </li>
            </ul>
        </div>
    )
}

export default SubHeader;