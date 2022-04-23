import React from "react"
import Carousel from "react-multi-carousel";
import './topSellers.css';
import {ReactComponent as AdidasPic} from '../../images/topSellersImages/adidas.svg';
import {ReactComponent as NewEraPic} from '../../images/topSellersImages/newEra.svg';
import {ReactComponent as NikePic} from '../../images/topSellersImages/Nike.svg';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    }  
};


const Item1 = () =>{
    return (
        <div>
            <AdidasPic />
        </div>
    )

}
const Item2 = () =>{
    return (
        <div>
            <NewEraPic />
        </div>
    )

}
const Item3 = () =>{
    return (
        <div>
            <NikePic />
        </div>
    )

}


const TopSellers = () => {
    return (
       <div className="topSellers">
           <div className="container">
                <h2>Top Sellers</h2>
                <Carousel responsive={responsive} renderDotsOutside={false} showDots={false}>
                    <Item1 />
                    <Item2 />
                    <Item3 />
                </Carousel>
           </div>
       </div>
    )

}

export default TopSellers;
