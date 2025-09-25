/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import arrow from "./../assets/arrow1.png";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import call from "./../assets/whatsappf.png";
import email from "./../assets/email.png";
import location from "./../assets/location.png";
import user from "./../assets/contactuser.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  const [valid, setData] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  function onChange(value: any) {
    setData(value);
  }

  const handalSubmit = async (e: any) => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData();
    formData.append("access_key", "9ab377e8-93da-4e3a-9664-c5872080d4b5");
    formData.append("Name", target.name.value);
    formData.append("Email", target.email.value);
    formData.append("Message", target.message.value);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setData(null);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Form Submitted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="relative  lg:h-[752px] lg:-mb-[120px]  h-auto  mx-auto lg:mt-[0px]  px-4 ">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-36 md:gap-0 gap-8 lg:pt-[81px] pt-[60px] max-w-[1240px] mx-auto">
        {/* Contact Content */}
        <div
          className="contact-content lg:w-[400px]"
          data-aos="fade-right" // Apply AOS fade-right animation
        >
          <h1 className="text-[#000030] text-[40px] lg:text-[64px] font-bold leading-[46px] lg:leading-[76.8px]">
            Contact Us
          </h1>
          <p className="text-[16px] lg:text-[20px] font-[400] regulars leading-[24px] lg:leading-[30px] mt-2 text-[#000030]">
            Have questions, ideas, or just want to say hello? We're here for
            you. Reach out through the details below or use the form to send a
            quick message. We'll get back to you promptly.
          </p>
          <div className="mt-8 lg:mt-10 ">
            <div className="flex gap-2 items-center">
              <img
                src={call}
                alt="Phone"
                className="w-10 h-10"
                loading="lazy"
                decoding="async"
              />
              <p className="text-[16px] regular lg:text-[20px] text-[#000030]">
                +8801521331108
              </p>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <img
                src={email}
                alt="Email"
                className="w-10 h-10"
                loading="lazy"
                decoding="async"
              />
              <p className="text-[16px] regular lg:text-[20px] text-[#000030]">
                hello@itechpark.co
              </p>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <img
                src={location}
                alt="Email"
                className="w-10 h-10"
                loading="lazy"
                decoding="async"
              />
              <p className="text-[16px] text-[#000030] regulars lg:text-[20px]">
                Mirpur 11 , Dhaka{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:absolute lg:-bottom-[0px] left-[35%] md:-bottom-5 transform -translate-x-1/2"
          data-aos="fade-up" // Apply AOS fade-up animation
        >
          <img
            className="w-[250px] lg:w-[418px] h-auto"
            src={user}
            alt="User"
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Form Section */}
        <div
          className="w-full lg:w-[422px] lg:-mt-10 md:mt-0 -mt-[35px] border bg-white rounded-xl p-6 lg:p-8 h-auto"
          data-aos="fade-left" // Apply AOS fade-left animation
        >
          <div className="flex flex-col  justify-center items-center gap-[5px] mb-[18px] mt-[10px]">
            <h3 className="text-[#000030]  bold md:text-[24px] text-[20px] leading-[24.5px]   md:leading-[28.8px]">
              Get in Touch
            </h3>
            <p className="md:text-[20px] regulars md:leading-[30px] text-[#000030] text-[16px] leading-[20.5px] ">
              Have ideas to share ? reach out !
            </p>
          </div>
          <form
            onSubmit={(e) => handalSubmit(e)}
            className="flex flex-col gap-4"
          >
            <input
              className="w-full h-[50px] lg:h-[70px] rounded-[8px] py-3 px-5 regulars bg-[#F8F4F1] focus:outline-none"
              type="text"
              placeholder="Full Name"
              name="name"
              required
            />
            <input
              className="w-full h-[50px] lg:h-[70px] rounded-[8px] regulars py-3 px-5 bg-[#F8F4F1] focus:outline-none"
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
            <textarea
              className="w-full h-[120px] lg:h-[146px] rounded-[8px] py-3 px-5 regulars bg-[#F8F4F1] focus:outline-none"
              placeholder="Write your Message"
              name="message"
              required
            ></textarea>

            <div className="flex justify-center items-center flex-col gap-5 mt-6">
              <ReCAPTCHA
                sitekey="6LefQ_IpAAAAAPg3gXYY9vijQkXSlAakn4letZZB"
                onChange={onChange}
              />
              <button
                className={`py-3 lg:py-4 px-5 lg:px-6 bg-[#000030] text-white font-bold rounded-[47px] flex justify-center items-center shadow-md transition-opacity duration-200 ${
                  !valid ? " cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={!valid}
              >
                Submit
                <img
                  className="w-5 h-5 lg:w-8 lg:h-8 ml-2"
                  src={arrow}
                  alt="Arrow"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
// TitumirDevOfItechParkBd123@
