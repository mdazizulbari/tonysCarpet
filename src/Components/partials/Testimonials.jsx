import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
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

  const testimonialData = [
    {
      name: "Sarah Mitchell",
      username: "@sarah_m_22",
      profileImg: "../../../public/images/testimonialImg/SarahMitchell.avif",
      text: "Tony saved my carpet! Quick, friendly, and affordable. Highly recommend.",
    },
    {
      name: "Emily Roberts",
      username: "@emrob_home",
      profileImg: "/images/testimonialImg/EmilyRoberts.avif",
      text: "Tony and his team installed vinyl flooring in my kitchen, and the transformation is stunning. They were punctual, respectful of my space, and made sure everything was cleaned up before leaving. The attention to detail was impressive. Very happy with the results!",
    },
    {
      name: "Lisa Turner",
      username: "@lisat_living",
      profileImg: "../../../public/images/testimonialImg/LisaTurner.avif",
      text: "Vinyl installation looks perfect! I’m impressed.",
    },
    {
      name: "Jennifer Clarke",
      username: "@jennyc.living",
      profileImg: "../../../public/images/testimonialImg/JenniferClarke.avif",
      text: "We were thinking of replacing the carpet entirely after a burn left an ugly mark. But Tony came in, assessed the situation, and told us it could be repaired for a fraction of the replacement cost. His attention to detail is incredible—after the repair, you can’t even tell where the damage was. Tony’s honesty and skill saved us a lot of money and hassle. It’s rare to find this level of professionalism these days!",
    },
  ];
  return (
    <section
      id="testimonials"
      className="testimonials px-8 py-20 flex flex-col items-center"
    >
      <h1
        ref={titleRef}
        className="py-20 text-5xl md:text-7xl text-secondary font-bold"
      >
        Testimonials
      </h1>

      <div className="cards_container md:max-w-xl flex flex-col gap-6">
        {testimonialData.map((data, index) => (
          <div
            key={index}
            className="card p-8 flex flex-col gap-6 rounded-3xl bg-white"
          >
            <div className="flex items-center gap-4">
              <img src={data.profileImg} alt="" className="w-16 rounded-full" />
              <div>
                <h4>{data.name}</h4>
                <h6 className="text-username text-sm">{data.username}</h6>
              </div>
            </div>
            <p className="text-text">{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
