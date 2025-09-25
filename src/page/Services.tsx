import React, { useEffect } from 'react';
import TextNavigationSlider from '../components/Service';
import './../animated.css'
const Services:React.FC = () => {
  useEffect(() => {
    const animateElement = (selector: string, animationClass: string): (() => void) | undefined=> {
      const element = document.querySelector(selector);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          }
        });
      });

      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    };

    // Observe both buttons
    const unobservePrev = animateElement(".swiper-button-prev", "bounceInLeft");
    const unobserveNext = animateElement(
      ".swiper-button-next",
      "bounceInRight"
    );

    return () => {
      if (unobservePrev) unobservePrev();
      if (unobserveNext) unobserveNext();
    };
  }, []);
  return (
    <div className="lg:mt-[133px] ">
      <TextNavigationSlider />
    </div>
  );
};

export default Services;