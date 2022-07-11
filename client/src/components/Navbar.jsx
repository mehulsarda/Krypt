import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import './style.css'
import logo from '../../images/logo.png'

const NavbarItems = ({ title, classProps }) => (
    <li style={{ marginLeft: "1rem", marginRight: "1rem", cursor: "pointer", display: "inline-block" }} className={classProps} >
        {title}
    </li >
);

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="logo" style={{ width: '32rem', cursor: "pointer" }} />
            </div>
            <ul className="list">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItems key={item + index} title={item} />
                ))}
                <li className="list-l">
                    Login
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;