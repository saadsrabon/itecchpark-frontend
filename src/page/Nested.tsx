/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Nested: React.FC<{ data: any }> = React.memo(({ data }) => {
  return (
    <SwiperComponent
      effect="fade"
      fadeEffect={{ crossFade: true }}
      navigation
      modules={[Navigation, EffectFade]}
      className="serviceImg"
    >
      {data.map((s: any, idx: number) => (
        <SwiperSlide key={idx}>
          <div className="lg:w-[621px] rounded-[20px] lg:h-[370px] overflow-hidden group bg-white mt-[46px]">
            <img
              loading="lazy"
              className=" mx-auto transition-all duration-300 group-hover:scale-125  lg:w-[621px] lg:h-[370px] rounded-[20px] "
              src={s.image}
              alt={s.title}
            />
          </div>
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
});

export default Nested;
