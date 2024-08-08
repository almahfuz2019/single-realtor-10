"use client"
import Image from "next/image";
import React from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

AOS.init(); // Initialize AOS

export default function Footer() {
  return (
    <div className="bg-[#EFCFA099] py-12 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 lg:gap-16 items-start justify-between">
          {/* Left Section */}
          <div className="w-full" data-aos="fade-up">
            <h1 className="text-[#496147] text-3xl md:text-[42px] font-normal leading-[40px] md:leading-[50px] font-merriweather">
              Sarah Petricia
            </h1>
            <p className="text-[#496147] text-base md:text-xl mt-2 mb-4">
              Real Estate Professional
            </p>
            <p className="text-base md:text-xl font-raleway text-[#496147] mt-4">
              A top performing agent with 15 years of NYC real estate
              experience, specializes in luxury homes and commercial properties,
              providing exceptional service and expert guidance for all your
              real estate needs.
            </p>
            <a href="#contact">
              <button className="bg-[#2B4257] text-[#F9F1F0] hover:bg-[#496147] text-base md:text-xl mt-6 px-6 md:px-8 py-2 md:py-2.5 rounded-lg font-medium transition-colors duration-300 ease-in-out">
                Drop a message
              </button>
            </a>
          </div>

          {/* Middle Section */}
          <div
            className="w-full lg:w-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="text-[#496147] text-3xl md:text-[42px] font-normal leading-[40px] md:leading-[50px] font-merriweather">
              Useful Links
            </h1>
            <div className="flex flex-col gap-3 text-base md:text-xl text-[#496147] font-roboto mt-4">
              <a
                href="#home"
                className="hover:text-primary transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#aboutme"
                className="hover:text-primary transition-colors duration-200"
              >
                About Me
              </a>
              <a
                href="#services"
                className="hover:text-primary transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#listing"
                className="hover:text-primary transition-colors duration-200"
              >
                Featured Property
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="w-full lg:w-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="text-primary text-3xl md:text-[42px] font-normal leading-[40px] md:leading-[50px] font-merriweather">
              Check Insights
            </h1>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-4 justify-start border border-[#496147] p-2 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/Images/Footer/image1.png"
                  width={80}
                  height={80}
                  alt="Home Security Tips"
                  className="object-cover"
                />
                <div>
                  <p className="text-base text-[#2B4257] mb-2">
                    Essential Home Security Tips: Protecting Your Property
                  </p>
                  <a
                    className="text-base text-[#2B4257] underline hover:text-primary transition-colors duration-200 underline-offset-4"
                    href=""
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="flex gap-4 justify-start border border-[#496147] p-2 hover:shadow-lg transition-shadow duration-300 ">
                <Image
                  src="/Images/Footer/image1.png"
                  width={80}
                  height={80}
                  alt="Home Security Tips"
                  className="object-cover"
                />
                <div>
                  <p className="text-base text-[#2B4257] mb-2">
                    Essential Home Security Tips: Protecting Your Property
                  </p>
                  <a
                    className="text-base text-[#2B4257] underline hover:text-primary transition-colors duration-200 underline-offset-4"
                    href=""
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <button className="rounded px-6 py-2 text-lg md:text-xl border border-[#496147] text-[#496147] mt-6 hover:bg-[#496147] hover:text-[#F9F1F0] transition-colors duration-200">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
