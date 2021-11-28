import media from "../assets/gallery/index.js"
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import styles from "../styles/Carousel.module.css"


// import Swiper core and required modules
import SwiperCore, {
  FreeMode,Navigation,Thumbs
} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode,Navigation,Thumbs]);


export default function Carousel() {
  
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  
  return (
    <>
   <h1 style={{textAlign:"center",color:"black",fontSize:"3rem",marginBottom:"30px"}}>GALLERY</h1>
  <Swiper style={{margin:"3%",marginTop:"0",marginBottom:"0",'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff', backgroundColor:"#292929", padding:"30px", paddingBottom:"10px"}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
  {media.map(img => {
        return (
          <SwiperSlide style={{display:"flex",justifyContent:"center", height:"65vh"}}>
            <Image src={img} layout="fill" objectFit="contain" alt="carpet" />
          </SwiperSlide>
        )
      })}
  </Swiper>
  <Swiper style={{margin:"3%",marginTop:"0",marginBottom:"0",'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff', backgroundColor:"#292929",padding:"3%",paddingTop:"0"}} onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
  {media.map(img => {
        return (
          <SwiperSlide style={{display:"flex",justifyContent:"center", height:"150px"}}>
            <Image src={img} layout="fill" objectFit="cover" alt="carpet" />
          </SwiperSlide>
        )
      })}
  </Swiper>
    </>
  )
}