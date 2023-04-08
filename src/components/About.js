import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props)
        
        //state- default value set
    }

    componentDidMount(){
        //api call
        
    }
    render(){
        return(
            <div>
                <h1 className="font-bold text-lg">About us page</h1>
                <p>
                    This is my react eCommerce project. Where i tried to make a app just like swiggy.🚀
                </p>
                <ProfileClass name={"Ipshita"}/>
            </div>
        )
    }
}

export default About;