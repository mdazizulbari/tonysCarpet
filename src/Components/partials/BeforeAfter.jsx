import React, { useState } from 'react';

const BeforeAfter = ({beforeImage , afterImage}) => {
  // State to manage image and button text
  const [isAfter, setIsAfter] = useState(false);

  // Toggle function
  const handleClick = () => {
    setIsAfter(!isAfter);
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${isAfter ? afterImage : beforeImage})`,
      }}
    >
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-black font-bold text-white rounded-full hover:bg-blue-600 transition-all duration-300"
      >
        {isAfter ? "Before Tony Came" : "After Tony Came"}
      </button>
    </div>
  );
};

export default BeforeAfter;
