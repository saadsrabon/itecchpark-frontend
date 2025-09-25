/* eslint-disable @typescript-eslint/no-explicit-any */
import img from "../../assets/textpaly.png"
import img1 from "../../assets/button.png"
const PulseButton = ({ onHideImage }: any) => {
    const openVideo = () => {
        onHideImage(true);
    };


    return (
        <div className="z-[9999] md:scale-100 scale-75">
            <button

                className={`  w-[100px] h-[100px] rounded-full cursor-pointer  relative`}
                onClick={openVideo}
                aria-label="Play video"
            >
                <img src={img1} alt="img1" loading="lazy" decoding="async" />
                <img className=" animate-spin   absolute  -top-[0px]" src={img} alt="img" loading="lazy" decoding="async" />
            </button>
        </div>
    );
};

export default PulseButton;
