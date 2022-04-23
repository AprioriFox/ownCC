import React from "react";
import Logo from '../../images/headerImages/logo.svg'
import Cart from '../../images/headerImages/cart.svg'
import {Link} from 'react-router-dom'
import './header.css'
import { TextField } from "@mui/material";


const Header = () =>{
    return (
        <div className="header">
            <div className="container">
                <div className="headerCont">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <div className="tabs">
                        <Link to="/catalog">Каталог</Link>
                        {/* <Link to="/brands">Бренды</Link> */}
                        {/* <Link to="/about">О Нас</Link> */}
                    </div>
                    <div className="search">
                        <TextField label="Search" className="searchField"/>
                    </div>
                    <Link to="/cart" className="cart">
                        <img src = {Cart} alt='cart' />
                    </Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;