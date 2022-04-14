import React from "react";
import LeftSide from '../../images/mainBannerImages/leftSide.svg';
import RightSide from '../../images/mainBannerImages/rightSide.svg';
import BackSide from '../../images/mainBannerImages/backSide.svg'
import './mainBanner.css'

const MainBanner = () => {
 return (
     <div className="mainBanner">
        <div className="caps">
            <div className="leftElems">
                <span className="yellowElipse"></span>
                <img src={LeftSide} alt='leftSide' className="leftSide"/>
            </div>
            <div className="rightElems">
                <img src={RightSide} alt="rightSide" className="rightSide"/>
                <div className="right">
                    <img src={BackSide} alt="backSide" className="backSide"/>
                    <span className="redElipse">
                        <span className="blick"></span>
                    </span>
                </div>
            </div> 
        </div>
        <div className="container">
            <div className = "mainBannerText">
                <h2>NEW ERA</h2>
                <p>Новая коллекция 2021 уже доступны на заказ
    яркие цвета, винтажный принт 70х, тематические 
    группы и отличное качество</p>
                <a href = "#" className="button">Открыть каталог</a>
            </div>
        </div>
     </div>
 )
}

export default MainBanner;
