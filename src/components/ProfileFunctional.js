import { useEffect, useState } from "react";

const Profile = (properties) => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log("useEffect")

        const timer = setInterval(()=>{
            console.log("Interval")
        },1000)

        // return function in useEffect is called just before the component is destroyed i.e, we navigate to another page
        // return function in useEffect work same as ngOnDestroy in Angular
        // and componentWillUnmount in Class based component
        return () => {
            clearInterval(timer)
        }
    },[count,count2])
    
    console.log("render functional component")
    
    return (
        <div>
            <h2>Profile Functional Component</h2>
            <h3>Name : {properties.name}</h3>
            <h3>Id : {properties.id}</h3>
            <h3>Count : {count}</h3>
            <h3>Count2 : {count2}</h3>
            <button onClick={()=>{
                setCount(1)
                setCount2(1)
            }}>Count</button>
        </div>
    )
}

export default Profile;