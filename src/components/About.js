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
            <div className="text-lg p-5 m-5">
                <h1 className="font-bold text-2xl text-center underline p-2">About us page</h1>
                <p>Food Villa is an Indian online food ordering and delivery platform. 
                    Food Villa also provides 
                    <ul>
                        <li>- on-demand grocery deliveries under the name <b>Instamart</b>,</li> 
                        <li>- on-demand non-veg deliveries under the name <b>FreshMeat</b>, and</li>
                        <li>- a same-day package delivery service called <b>InstaDelivery</b>.</li>   
                    </ul>
                </p><br/>
                <p>
                    This is my react eCommerce project. Where i tried to make a app just like swiggy.🚀<br/>
                    This application has search option, real time restaurant and its menus.
                </p>
                <ProfileClass name={"Ipshita"}/>
            </div>
        )
    }
}

export default About;