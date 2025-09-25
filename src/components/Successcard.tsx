import React from 'react';
interface cardProp{
    img:string,
    name:string,
    designation:string,
    description:string
}
const Successcard:React.FC<cardProp> = ({img,name,designation,description}) => {
    return (
      <div className="border border-[#F04B23] rounded-[24px] px-[26px] pt-[26px] pb-[44px] md:w-[350px] md:gap-10  lg:w-[373px] w-full h-[490px] ">
        <div className='flex gap-2 items-center'>
          <img className='w-[80px] h-[80px] rounded-full' src={img} alt="success" loading="lazy" decoding="async" />
          <div>
            <p className='text-[24px] font-[700] leading-[24px] text-[#F04B23]'>{name}</p>
            <p className='text-[20px] font-[600] leading-[30px] text-black'>{designation}</p>
          </div>
        </div>
        <div className='font-[400] text-[20px] leading-[30px] text-black mt-10'>
         {description}
        </div>
      </div>
    );
};

export default Successcard;