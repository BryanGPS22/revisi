import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import { IoFlash } from "react-icons/io5";


const images = [
  {
    id: 1,
    imageUrl: "/images/1.jpeg",
    title: "Sapu Kembang Gelagah 1",
    price: "Rp15.000",
    diskon: "Rp21.000",
    economical: "Rp6.000",
  },
  {
    id: 2,
    imageUrl: "/images/2.jpeg",
    title: "Sapu Kembang Gelagah 2",
    price: "Rp15.000",
    diskon: "Rp21.000",
    economical: "Rp6.000",
  },
  {
    id: 3,
    imageUrl: "/images/3.jpeg",
    title: "Sapu Kembang Gelagah 3",
    price: "Rp15.000",
    diskon: "Rp21.000",
    economical: "Rp6.000",
  },
  {
    id: 4,
    imageUrl: "/images/4.jpeg",
    title: "Sapu Kembang Gelagah 4",
    price: "Rp15.000",
    diskon: "Rp21.000",
    economical: "Rp6.000",
  },
];

const MarqueeWithImages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handleImageClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="bg-[#4187B6] bg-no-repeat bg-center rounded-xl mt-[-32px]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-gray-800 p-4">
            <h3 className="font-bold text-left flex items-center text-md text-white mb-2">
              <IoFlash size={20} className="mr-2 text-orange" />
              FLASH SALE
            </h3>
            <div className="border-b border-white"></div>
            <Slider {...settings}>
              {images.map((item) => (
                <div
                  key={item}
                  onClick={handleImageClick}
                  className="cursor-pointer"
                >
                  <div className="hover:border-[#B58330] relative w-full max-w-[20rem] bg-transparent text-gray-700">
                    <div className="relative mx-1 rounded-lg mt-4 overflow-hidden bg-blue-gray-500 text-white self-center">
                      <div className="border p-3 items-center overflow-hidden rounded-lg bg-white text-gray-800 relative">
                        <Image
                          src={item.imageUrl}
                          className="object-contain rounded-lg mr-3 flex-shrink-0 mb-1"
                          width={40}
                          height={50}
                          alt={item.imageUrl}
                        />
                        <p className="text-xxs text-gray-700 mb-6">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#ff3956] font-medium">
                          {item.price}
                        </p>
                        <p className="line-through text-xs text-gray-500 font-medium">
                          {item.diskon}
                        </p>
                        <p
                          className="absolute top-0 right-0 bg-[#FEE2E2] text-[#ff3956] text-xxs font-medium p-0.5 rounded-tr-xl"
                          style={{ borderRadius: "0 0 0 10px" }}
                        >
                          Hemat{" "}
                          <span className="font-semibold">
                            {item.economical}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeWithImages;
