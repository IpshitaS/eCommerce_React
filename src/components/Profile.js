import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("intervel");
        },1000);
        return () => {
            clearInterval(timer);
        }
    },[])

    return (
    <div>
        <h2>Profile Functional component.</h2>
        <h4>Name: {props.name}</h4>
        <h4>Count: {count}</h4>
        <button
            onClick={() => {
                setCount(1);
            }}
        >count</button>
    </div>
    )
}

export default Profile;