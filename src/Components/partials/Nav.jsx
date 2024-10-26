import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";
import { HashLink } from "react-router-hash-link";
import gsap from "gsap";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const logoRef = useRef(null);

  // Toggle the dropdown menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // GSAP animation for menu items
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.out" } });
    
    // Animation for logo
    tl.from(logoRef.current, { y: -50, opacity: 0, duration: 0.7 });

    // Animation for menu items, only if the menu is open and menuRef.current exists
    if (isMenuOpen && menuRef.current) {
      tl.staggerFrom(menuRef.current.children, 0.5, { y: -20, opacity: 0 }, 0.1, "-=0.5");
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full bg-primary z-10">
      <div className="px-8 py-4 flex justify-between items-center">
        <p ref={logoRef} className="text-secondary text-xl font-semibold">TONYS.CARPET</p>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <AiOutlineClose /> : <TfiMenu />}
          </button>
        </div>
        <div className="hidden sm:flex gap-5" ref={menuRef}>
          <HashLink smooth to="/#home" className="text-white font-semibold">
            Home
          </HashLink>
          <HashLink smooth to="/#faq" className="text-white font-semibold">
            FAQ
          </HashLink>
          <HashLink smooth to="/#testimonials" className="text-white font-semibold">
            Testimonials
          </HashLink>
          <HashLink smooth to="/#contact" className="text-white font-semibold">
            Contact
          </HashLink>
        </div>
      </div>

      {/* Dropdown menu for mobile view */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-primary py-4" ref={menuRef}>
          <HashLink
            smooth
            to="/#home"
            onClick={() => { toggleMenu(); }} // Close menu on click
            className="text-white font-semibold py-2"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#faq"
            onClick={() => { toggleMenu(); }} // Close menu on click
            className="text-white font-semibold py-2"
          >
            FAQ
          </HashLink>
          <HashLink
            smooth
            to="/#testimonials"
            onClick={() => { toggleMenu(); }} // Close menu on click
            className="text-white font-semibold py-2"
          >
            Testimonials
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            onClick={() => { toggleMenu(); }} // Close menu on click
            className="text-white font-semibold py-2"
          >
            Contact
          </HashLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
