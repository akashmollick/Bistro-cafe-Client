import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Slide1 from '../../../assets/home/slide1.jpg'
import Slide2 from '../../../assets/home/slide2.jpg'
import Slide3 from '../../../assets/home/slide3.jpg'
import Slide4 from '../../../assets/home/slide4.jpg'
import Slide5 from '../../../assets/home/slide5.jpg'

const Catagory = () => {
  return (
    <>
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-20"
      >
        <SwiperSlide><img src={Slide1} alt="" />
        <h3 className='text-3xl text-center text-white -mt-20'>salad</h3>
        </SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="" />
        <h3 className='text-3xl text-center text-white -mt-20'>pizza</h3>
        </SwiperSlide>
        <SwiperSlide><img src={Slide3} alt="" />
        <h3 className='text-3xl text-center text-white -mt-20'>soup</h3>
        </SwiperSlide>
        <SwiperSlide><img src={Slide4} alt="" />
        <h3 className='text-3xl text-center text-white -mt-20'>cake</h3>
        </SwiperSlide>
        <SwiperSlide><img src={Slide5} alt="" />
        <h3 className='text-3xl text-center text-white -mt-20'>salad</h3>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  )
}

export default Catagory