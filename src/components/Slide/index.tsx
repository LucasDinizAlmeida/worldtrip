// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import style from './styles.module.css'
import { useBreakpointValue, Text } from '@chakra-ui/react';
import { SlideItem } from './SlideItem';

export function Slide() {

  const isShortVersion = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Swiper
      className={style.swiper}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={style['swiper-slide']}>
        <SlideItem href="/continent/europa" src="/assets/slides/europe.png" />
        <Text color="gray.100" fontSize="5xl" fontWeight="medium" position="absolute">Europa</Text>
      </SwiperSlide>
      <SwiperSlide className={style['swiper-slide']}>
        <SlideItem href="/continent/asia" src="/assets/slides/asia.png" />
        <Text color="gray.100" fontSize="5xl" fontWeight="medium" position="absolute">Asia</Text>
      </SwiperSlide>
      <SwiperSlide className={style['swiper-slide']}>
        <SlideItem href="/continent/oceania" src="/assets/slides/oceania.png" />
        <Text color="gray.100" fontSize="5xl" fontWeight="medium" position="absolute">Oceania</Text>
      </SwiperSlide>
      <SwiperSlide className={style['swiper-slide']}>
        <SlideItem href="/continent/america" src="/assets/slides/northamerica.png" />
        <Text color="gray.100" fontSize="5xl" fontWeight="medium" position="absolute">América do norte</Text>
      </SwiperSlide>
      <SwiperSlide className={style['swiper-slide']}>
        <SlideItem href="/continent/southamerica" src="/assets/slides/southamerica.png" />
        <Text color="gray.100" fontSize="5xl" fontWeight="medium" position="absolute">América do sul</Text>
      </SwiperSlide>



    </Swiper>
  );
};