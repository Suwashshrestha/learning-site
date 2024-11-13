import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       >
      <SwiperSlide>
        <img src="/img1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img2.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img3.jpg" alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img4.jpg" alt="Slide 4" />
      </SwiperSlide>

    </Swiper>
  );
};

export default Slider;
