import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BeforeAfter = ({ beforeImage, afterImage }) => {
  // State to manage image and button text
  const [isAfter, setIsAfter] = useState(false);

  // Toggle function
  const handleClick = () => {
    setIsAfter(!isAfter);
  };

  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 75%", // Adjust start position
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${isAfter ? afterImage : beforeImage})`,
      }}
    >
      <button
        ref={titleRef}
        onClick={handleClick}
        className="px-6 py-3 bg-black font-bold text-white md:text-2xl lg:text-4xl rounded-full hover:bg-blue-600 transition-all duration-300"
      >
        {isAfter ? "Before Tony Came" : "After Tony Came"}
      </button>
    </div>
  );
};

export default BeforeAfter;
