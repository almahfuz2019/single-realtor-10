import Image from "next/image";
import React from "react";

export default function Services() {
  const cardsData = [
    {
      title: "Buy Dream Home",
      description:
        "Discover your perfect home with our expert guidance. From search to closing, we provide personalized support to make your dream home a reality.",
      buttonText: "See All ",
      imageUrl: "/Images/Services/service1.png",
    },
    {
      title: "Sell Your Property",
      description:
        "Unlock Your Property's Full Potential with Our Expert Selling Services. From Market Analysis to Closing, We Ensure a Smooth, Profitable Sale. So, Get Started!",
      buttonText: "Explore ",
      imageUrl: "/Images/Services/service1.png",
    },
    {
      title: "Home Evaluation",
      description:
        "Get an Accurate Home Evaluation: Discover Your Property's True Market Value with Expert Assessment, Detailed Analysis and Get Personalized Insights.",
      buttonText: "Calculate",
      imageUrl: "/Images/Services/service1.png",
    },
    {
      title: "Mortgage Calculator",
      description:
        "Use our Mortgage Calculator to estimate your monthly payments, compare loan options, and plan your budget. Simplify your home buying journey.",
      buttonText: "Evaluate",
      imageUrl: "/Images/Services/service1.png",
    },
  ];

  return (
    <div
      id="services"
      className="bg-[#496147] py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="px-4 sm:px-6 lg:px-16">
        <div className="max-w-[1320px] px-4 mx-auto">
          {/* Header section */}
          <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
            <h3
              data-aos="fade-up"
              className="text-xl sm:text-3xl font-light text-[#EFCFA0] border border-[#EFCFA0] px-2 py-1 sm:py-[11px] sm:px-[21px] inline-block mx-auto font-raleway"
            >
              Our Services
            </h3>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[#EFCFA0] font-bold sm:text-4xl text-3xl md:text-5xl font-merriweather"
            >
              What We Offer
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="sm:text-xl text-sm font-normal text-[#EFCFA0]"
            >
              Learn About Our Background, Experience, and Dedication to
              Providing Outstanding Real Estate Services Tailored to Your Needs
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="relative rounded-xl w-full overflow-hidden md:py-16 py-10 px-4 md:px-6"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                <Image
                  src={card.imageUrl}
                  width={692}
                  height={530}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center text-[#E2E6E7CC]">
                  <h2 className="md:text-4xl text-3xl text-[#EFCFA0] mb-4 font-merriweather">
                    {card.title}
                  </h2>
                  <p className="mb-8 text-base md:text-xl text-[#EFCFA0] font-normal">
                    {card.description}
                  </p>
                  <button className="bg-[#EFCFA0] text-[#2B4257] font-medium text-xl py-2 px-4 rounded">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
