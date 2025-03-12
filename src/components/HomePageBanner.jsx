import React, { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function HomePageBanner() {
    const img = [
        "https://projectcaca.org/wp-content/uploads/2021/04/sliders_3.png",
        "https://projectcaca.org/wp-content/uploads/2021/04/sliders_4.png",
        "https://projectcaca.org/wp-content/uploads/2021/04/sliders_5.png",
        "https://projectcaca.org/wp-content/uploads/2021/04/sliders_6.png",
        "https://projectcaca.org/wp-content/uploads/2021/04/sliders_7.png",
        "https://projectcaca.org/wp-content/uploads/2021/04/sliders_8.png",
        "https://projectcaca.org/wp-content/uploads/2021/04/sliders_9.png",
        "https://projectcaca.org/wp-content/uploads/2021/04/sliders_10.png",
        "https://projectcaca.org/wp-content/uploads/2021/04/sliders_11.png",
        "https://projectcaca.org/wp-content/uploads/2021/04/sliders_12.png",
      ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === img.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? img.length - 1 : prevIndex - 1
      );
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }, [currentIndex]);
  
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 h-full ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {img.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`slider-${index}`}
              className="w-full h-auto flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#744e4ed5] text-white cursor-pointer duration-500 hover:bg-[#412c2c] p-3 rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#744e4ed5] cursor-pointer duration-500 hover:bg-[#412c2c] text-white p-3 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>
  )
}

export default HomePageBanner