import React from "react";
import Logo from '../../images/headerImages/logo.svg'
import Cart from '../../images/headerImages/cart.svg'
import './header.css'


const Header = () =>{
    return (
        <div className="header">
            <div className="container">
                <div className="headerCont">
                    <a href="#" className="logo">
                        <img src={Logo} alt="logo" />
                    </a>
                    <div className="tabs">
                        <p>Каталог</p>
                        <p>Бренды</p>
                        <p>О Нас</p>
                    </div>
                    <div className="search">

                    </div>
                    <a href="#" className="cart">
                        <img src = {Cart} alt='cart' />
                    </a>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;