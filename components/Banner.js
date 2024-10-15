import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change 3000 to adjust the interval in milliseconds

    return () => clearInterval(interval); // Cleanup function to clear the interval on component unmount
  }, [current, slides.length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="bg-[cover] bg-no-repeat bg-center">
        <div
          className="bg-white bg-no-repeat bg-center z-10"
          style={{ borderRadius: "100px 100px 100px 100px" }}
        >
          <div className="container mx-auto max-w-full md:max-w-7xl py-4 mt-[-24px] px-4"></div>
        </div>
        <div className="container max-w-full md:max-w-3xl px-6 md:mt-0 mt-5">
          <div className="slider">
            {slides.map((slide, index) => (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt="travel image" className="image" />
                )}
              </div>
            ))}

            <div className="dots-container absolute bottom-0 mb-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={index === current ? "dot active" : "dot"}
                  onClick={() => setCurrent(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const SliderData = [
    {
      image: "/images/slider/1.svg",
    },
    {
      image: "/images/slider/2.svg",
    },
    {
      image: "/images/slider/3.svg",
    },
  ];

  return (
    <div>
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default App;
