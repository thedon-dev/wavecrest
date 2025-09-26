import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Home/People-Innovation.jpg";
import Img2 from "../../assets/Home/EPCM.png";
import Img3 from "../../assets/Home/Creating-value.jpg";
import Img4 from "../../assets/Home/Ensuring-Excellence.jpg";
import Img5 from "../../assets/Home/Hi-Tech.jpg";
import Img6 from "../../assets/Home/Supply-Chain.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "People . Innovation . Customer Focus",
      image: Img1,
      description: "Cutting-edge artificial intelligence solutions",
    },
    {
      id: 2,
      title: "EPCM & EPCI - A Leading Engineering Service Provider",
      image: Img2,
      description: "Scalable and secure cloud solutions",
    },
    {
      id: 3,
      title: "Creating values through technology...",
      image: Img3,
      description: "Transform data into actionable insights",
    },
    {
      id: 4,
      title: "Ensuring excellence in service delivery...",
      image: Img4,
      description: "Protecting your digital assets",
    },
    {
      id: 5,
      title: "Hi-Tech products created around client's requirements...",
      image: Img5,
      description: "Protecting your digital assets",
    },
    {
      id: 6,
      title: "Demonstrating a world-class supply chain process...",
      image: Img6,
      description: "Protecting your digital assets",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <>
      <section className="h-[600px] overflow-hidden relative shadow-2xl">
        <div
          className="absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 py-12 h-full flex flex-col justify-center ">
          <div className=" z-15 text-white opacity-80 transition-opacity duration-500">
            <p className="bg-blue-500 font-semibold text-3xl px-6 py-4 w-fit">
              {slides[currentSlide].title}
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 z-20 flex items-center">
          <div className="flex mr-5">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-400 scale-110"
                    : "bg-white/30"
                }`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>

          <button
            className="w-12 h-12 bg-slate-900/70 border border-teal-400/30 text-blue-400 flex items-center justify-center transition-all duration-300 hover:bg-teal-400/10 hover:border-blue-400 hover:scale-105 ml-2"
            onClick={goToPrevSlide}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="w-12 h-12 bg-slate-900/70 border border-teal-400/30 text-blue-400 flex items-center justify-center transition-all duration-300 hover:bg-teal-400/10 hover:border-blue-400 hover:scale-105 ml-2"
            onClick={goToNextSlide}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
      <div className="bg-black px-[5%] flex flex-col lg:flex-row justify-between lg:items-center py-10">
        <div className="text-white lg:w-2/3">
          <h1 className="text-2xl lg:text-3xl font-seemiboold">
            Welcome to WaveCrest limited
          </h1>
          {/* <p className="text-xs lg:text-sm mt-3">
            WaveCrest limitedproudly stands as a wholly Nigerian-owned entity
            within the dynamic realm of oil and gas services. Our core mission
            revolves around leveraging our specialized technical prowess and
            nurturing a motivated team of professionals to make meaningful
            contributions to Nigeria's Petroleum and Energy sector, as well as
            the broader West African region. Renowned as a bastion of
            technology, creativity, and expertise, we excel in problem-solving
            within the Petroleum industry.
          </p> */}
        </div>
        <Link
          to="/about-us"
          className="px-7 mt-5 lg:mt-0 py-2 bg-blue-400 text-white w-fit"
        >
          Read More
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
