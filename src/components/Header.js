import { useState } from "react"

const Title = ()=> {
    return (
        <img alt="logo" className="headerImg"
        src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"></img>
    )
}

const Header = ()=> {

    const [isLoggedIn, setLoggedIn] = useState(false)

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? 
                <button onClick={()=>{setLoggedIn(false)}}>Logout</button> : 
                <button onClick={()=>{setLoggedIn(true)}}>Login</button>
            }
        </div>
    )
}

export default Header;