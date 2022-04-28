import React from "react";
import './topSellers.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import { Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


const Adidas = () =>{
    return(
        <div className={'topSellersItem'}>
            <span className="adidasPic"></span>
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
                   modules={[Navigation]}
                   spaceBetween={50}
                   slidesPerView={3}
                   navigation
                   onSwiper={(swiper) => console.log(swiper)}
                   onSlideChange={() => console.log('slide change')}
               >
                   <SwiperSlide><Adidas/></SwiperSlide>
                   <SwiperSlide><Adidas/></SwiperSlide>
                   <SwiperSlide><Adidas/></SwiperSlide>
                   <SwiperSlide><Adidas/></SwiperSlide>
               </Swiper>
           </div>
       </div>
    )

}

export default TopSellers;
