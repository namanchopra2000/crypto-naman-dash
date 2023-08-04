import React from "react";
import "./style.css";
import Switch from '@mui/material/Switch'; //switch icon
import MobileDrawer from "./drawer"; //import drawer
import Button from "../Button";    
import { Link, NavLink } from "react-router-dom";



const Header = ({setDarkMode , darkMode}) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    function toggleDarkMode(){
        setDarkMode(!darkMode);
        const root = document.documentElement;
        root.classList.toggle('dark');
    }
    return (
// navbar
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/"className="navlink"><h1>CryptoTracker<span id="nav-title-dot">.</span></h1></NavLink>
            </div>
            <div className="nav-links">
                <Switch {...label} defaultChecked onClick={()=> toggleDarkMode()}  />
                
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/compare" className="nav-link">Compare</Link>
                <Link to="/watchlist" className="nav-link">Watchlist</Link>
                <Link to="/dashboard" className="nav-link">
                <Button text={"Dashboard"} />
                </Link>
            </div>
    
            <div className="mobile-drawer">
                <MobileDrawer />
            </div>
        </nav>   

    )

}
export default Header;
