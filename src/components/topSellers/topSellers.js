import React from "react";
import './topSellers.css';
import AdidasPic from '../../images/topSellersImages/adidas.svg';
import {ReactComponent as NewEraPic} from '../../images/topSellersImages/newEra.svg';
import {ReactComponent as NikePic} from '../../images/topSellersImages/Nike.svg';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Swiper, SwiperSlide} from "swiper/react";


const Adidas = () =>{
    return(
        <div className={'topSellersItem'}>
            <img src={AdidasPic} alt={'adidas'} className={'adidasItem'}/>
            <div className={'adidasItemInfo'}>
                <h2>Adidas</h2>
                <p>San Francisco Baseball</p>
                <p>3800c</p>
            </div>
        </div>
    )
}

const TopSellers = () => {
    return (
       <div className="topSellers">
           <div className="container">
                <h2>Top Sellers</h2>
               <Swiper
                   spaceBetween={50}
                   slidesPerView={3}
                   onSlideChange={() => console.log('slide change')}
                   onSwiper={(swiper) => console.log(swiper)}
               >
                   <SwiperSlide><Adidas/></SwiperSlide>
                   <SwiperSlide><Adidas/></SwiperSlide>
               </Swiper>
           </div>
       </div>
    )

}

export default TopSellers;
