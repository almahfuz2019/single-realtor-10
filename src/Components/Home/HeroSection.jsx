/* eslint-disable react/no-unescaped-entities */
import React from "react";
// images
import heroBG from "../../../public/Images/Hero/background.png";

export default function Hero() {
  return (
    <section className="relative lg:px-0 overflow-hidden">
      {/* Hero section background */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBG.src})` }}
        data-aos="fade-in"
      >
        <div className="relative mx-auto max-w-screen-lg px-4 h-[64vh] sm:h-[70vh] lg:h-screen flex flex-col items-center justify-center">
          <div className="text-center flex flex-col items-center mt-20 2xl:mt-0">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl text-[#EFCFA0] font-merriweather "
              data-aos="fade-up"
            >
              Your key to a smarter move. <br className="hidden lg:block" />{" "}
              Unlocking the potential of Your Dream{" "}
              <br className="hidden lg:block" />
              With #1 Realtor of your City.
            </h1>
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg md:text-xl font-normal leading-[27.24px] mt-6 text-[#EFCFA0CC] font-montserrat"
            >
              Expert Guidance, Local Market Mastery, and Personalized Service.
              Experience Seamless <br className="hidden lg:block" />{" "}
              Transactions and Find Your Perfect Home with the City's Top
              Realtor.
            </p>

            <div className="mt-16 flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="rounded bg-[#F9F1F0] px-6 py-2 text-lg md:text-xl text-[#496147] shadow transition duration-300 ease-in-out transform hover:bg-[#5f7c5d] hover:text-white hover:shadow-xl focus:outline-none font-raleway"
                data-aos="zoom-in"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="rounded px-6 py-2 text-lg md:text-xl text-[#F9F1F0] shadow transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none bg-transparent border border-[#F9F1F0]  hover:border-transparent font-raleway hover:bg-[#5f7c5d]"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                Explore Property
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
