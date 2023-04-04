import { Link } from "react-router-dom"

const SubHeader = () => {
    return(
        <div className="sub-header">
            <ul>
                <li className="instamart"><Link to="/instamart">InstaMart</Link></li>
                <li className="insta-delivery"><Link to="/insta_delivery">Insta Delivery</Link></li>
                <li className="fresh-meat"><Link to="/fresh_meat">Fresh Meat</Link></li>
            </ul>
        </div>
    )
}

export default SubHeader;