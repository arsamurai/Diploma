import React, { useState } from "react";
import Image from "next/image";
import image from "../../../assets/images/default.jpeg";

// Import Swiper settings
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface DeviceSliderProps {
  images?: [];
}

const DeviceSlider: React.FC<DeviceSliderProps> = ({}) => {
  const [controlledSwiper, setControlledSwiper] = useState(undefined);

  return (
    <div className="slider device-slider">
      <div className="device-slider__top">
        <Swiper
          modules={[Navigation, Controller]}
          slidesPerView={1}
          effect={"fade"}
          navigation
          controller={{ control: controlledSwiper }}
        >
          <SwiperSlide>
            <Image src={image} alt="image" className="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image} alt="image" className="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image} alt="image" className="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image} alt="image" className="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image} alt="image" className="image" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="device-slider__bottom">
        <Swiper
          modules={[Navigation, Controller]}
          slidesPerView={4}
          navigation
          watchSlidesProgress
          onSwiper={(swiper) => setControlledSwiper}
        >
          <SwiperSlide>
            <Image src={image} alt="image" className="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image} alt="image" className="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image} alt="image" className="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image} alt="image" className="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image} alt="image" className="image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DeviceSlider;
