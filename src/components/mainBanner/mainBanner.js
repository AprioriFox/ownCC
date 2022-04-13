import React from "react";
import './mainBanner.css'

const MainBanner = () => {
 return (
     <div className="mainBanner">
            <span className="yellowElipse"></span>
            {/* <span className="leftSide"></span> */}
            {/* <span className="rightSide"></span> */}
            {/* <span className="backSide"></span> */}
        <div className="container">
            <din className = "mainBannerText">
                <h2>NEW ERA</h2>
                <p>Новая коллекция 2021 уже доступны на заказ
    яркие цвета, винтажный принт 70х, тематические 
    группы и отличное качество</p>
                <a href = "#" className="button">Открыть каталог</a>
            </din>
        </div>
     </div>
 )
}

export default MainBanner;
