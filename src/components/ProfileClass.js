import React, { Component } from "react"; 
class ProfileClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo : {
                login: "Dummy Name",
                location: "Dummy Location",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/IpshitaS");
        const json= await data.json();
        //console.log(json)
        this.setState({
            userInfo: json,
        })

        this.timer = setInterval(() => {
            //console.log("intervel");
        },1000)
    }

    componentDidUpdate(){

    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return (
            <div className="profile">
                <h2>Profile Class commponent</h2>
                <img src={this.state.userInfo?.avatar_url} />
                <h4>Name: {this.state.userInfo?.login}</h4>
                <h4>Location: {this.state.userInfo?.location}</h4>
            </div>
        )
    }
}

export default ProfileClass;