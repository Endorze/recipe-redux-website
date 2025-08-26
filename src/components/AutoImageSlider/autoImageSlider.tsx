'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export const AutoImageSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      <SwiperSlide>
        <img className='w-[450px] transition-all duration-300 ease-in' src="/images/login/recipe1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[450px]' src="/images/login/recipe2.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[450px]' src="/images/login/recipe3.avif" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}
