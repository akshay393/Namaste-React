import { useState } from "react";
import Logo from "../assets/images/foodvilla.png";
import { Link } from "react-router-dom";

const Title = ()=> {
    return (
        <a href="/">
            <img alt="logo" className="headerImg" src={Logo}></img>
        </a>
    )
}

const Header = ()=> {

    const [isLoggedIn, setLoggedIn] = useState(false)

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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