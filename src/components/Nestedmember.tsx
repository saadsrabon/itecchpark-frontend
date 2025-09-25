/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Nestedmember: React.FC<{ data: any }> = ({ data }) => {
  return (
    <SwiperComponent
      effect="fade"
      fadeEffect={{ crossFade: true }}
      navigation
      modules={[Navigation, EffectFade]}
      className="teamswiperchild"
    >
      {data.map((slide: any, idx: number) => (
        <SwiperSlide key={idx}>
          <div
            className={`p-3 lg:p-14 flex flex-col md:flex-row gap-5 lg:justify-start lg:items-center bg-[#F04B23] h-[580px] md:h-[360px] lg:h-[453px] rounded-[20px] ${
              slide.content === "" && "h-[480px] rounded-[20px]"
            }`}
          >
            <img
              src={slide.image}
              className="w-full md:h-[333px] md:w-[305px] lg:w-[305px] lg:h-[333px] rounded-[20px] object-cover"
              alt={slide.title}
            />
            <div className="flex lg:justify-start lg:items-start  flex-col md:justify-center  ">
              {" "}
              <h1 className="text-[24px] lg:text-[36px] text-white  bold lg:leading-[43.2px] ">
                {slide.name}
              </h1>
              <p className="text-white md:text-[22px] semibold md:leading-[26px] text-[18px] leading-[22.2px]  text-left">
                {slide.designation}
              </p>
              <p className="text-sm regular lg:text-base mt-3 lg:mt-4 text-white">
                {slide.content}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default Nestedmember;
