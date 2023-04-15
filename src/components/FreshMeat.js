import logo from "../assets/1.png";

const FreshMeat = () => {
    return(
        <div className="p-3 text-center">
            {/* <h1 className="font-bold text-xl">Welcome to Food Villa FreshMeat</h1> */}
            {/* <h3 className="text-xl">What's cooking in the kitchen!!! 🧑‍🍳🍗🥚🦐</h3> */}
            <img className="h-60 w-full" src="https://dao54xqhg9jfa.cloudfront.net/oms/d69c0d21-7139-b59b-5d2a-07169c71aa81/original/BANNERS-02_(4).jpeg" />
            <img src={logo} />
        </div>
    )
}

export default FreshMeat;