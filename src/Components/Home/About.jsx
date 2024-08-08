"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import profilePic from "../../../public/Images/About/me.png"; // Make sure this path is correct

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  return (
    <section
      id="aboutme"
      className="text-white py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-16 max-w-screen-xl mx-auto"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header section */}
        <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
          <h3
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-light text-[#2B4257] border border-[#2B4257] px-2 py-1 sm:py-[11px] sm:px-[21px] inline-block mx-auto font-raleway"
          >
            About Me
          </h3>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#2B4257] font-bold sm:text-4xl text-3xl md:text-5xl font-merriweather"
          >
            Know About Your Realtor
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="sm:text-xl text-sm font-normal text-[#2B4257CC]"
          >
            Learn About Our Background, Experience, and Dedication to Providing
            Outstanding Real Estate Services Tailored to Your Needs
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          <div className="w-full lg:w-[30vw]">
            <div className="relative rounded-lg" data-aos="zoom-in">
              <Image
                src={profilePic}
                alt="Overview"
                layout="responsive"
                className="rounded-lg"
              />
              <button
                onClick={handleButtonClick}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-lg gap-4"
              >
                <Image
                  src="/Images/About/video_Icon.png"
                  alt="video_Icon"
                  height={36}
                  width={36}
                />
                See Overview
              </button>
            </div>

            <div>
              <h5
                data-aos="fade-up"
                className="text-[#091235] text-2xl md:text-4xl mt-8 font-normal leading-tight font-merriweather "
              >
                Quick Info
              </h5>
              <div className="mt-6 space-y-4 md:space-y-6 text-base md:text-xl">
                <div data-aos="fade-up" className="flex items-center">
                  <div className="p-1 rounded">
                    <Image
                      src="/Images/About/call.png"
                      alt="Phone"
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <span className="ml-4  text-[#2B4257CC]">(555) 123-4567</span>
                </div>
                <div data-aos="fade-up" className="flex items-center">
                  <div className="p-1 rounded">
                    <Image
                      src="/Images/About/email.png"
                      alt="Email"
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <span className="ml-4 text-[#2B4257CC]">
                    davidson@xyzrealty.com
                  </span>
                </div>
                <div data-aos="fade-up" className="flex items-center">
                  <div className="p-1 rounded">
                    <Image
                      src="/Images/About/location.png"
                      alt="Location"
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <span className="ml-4 text-[#2B4257CC]">
                    1234 Broadway, New York, NY 10001
                  </span>
                </div>
              </div>
              <h5
                data-aos="fade-up"
                className="text-[#091235] text-2xl md:text-4xl mt-8 font-normal leading-tight font-merriweather"
              >
                Follow Me
              </h5>
              <ul className="flex gap-x-2 px-1 pt-4">
                <li
                  className="transform transition-transform hover:scale-110"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <a href="#">
                    <Image
                      src="/Images/About/facebook.png"
                      height={40}
                      width={40}
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li
                  className="transform transition-transform hover:scale-110"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <a href="#">
                    <Image
                      src="/Images/About/twitter.png"
                      height={40}
                      width={40}
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li
                  className="transform transition-transform hover:scale-110"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <a href="#">
                    <Image
                      src="/Images/About/instagram.png"
                      height={40}
                      width={40}
                      alt="Instagram"
                    />
                  </a>
                </li>
              </ul>
              <h5
                data-aos="fade-up"
                className="text-[#2B4257] text-2xl md:text-4xl mt-16 mb-8 font-normal leading-tight font-merriweather"
              >
                Work Process
              </h5>
              <div className="flex flex-col">
                <div
                  className="p-4 border border-[#2B425780] flex items-center"
                  data-aos="zoom-in"
                >
                  <p className="md:text-lg text-base flex items-center gap-2 font-medium text-[#2B4257] font-raleway px-10 text-center">
                    1. Exceptional Market Expertise
                  </p>
                </div>
                <div
                  className="h-10 w-[2px] mx-auto bg-[#496147]"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                ></div>
                <div
                  className="p-4 border border-[#2B425780] flex items-center"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <p className="md:text-lg text-base flex items-center gap-2 font-medium text-[#2B4257] font-raleway px-10 text-center">
                    2. Unique Negotiation Skills
                  </p>
                </div>
                <div
                  className="h-10 w-[2px] mx-auto bg-[#496147]"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                ></div>
                <div
                  className="p-4 border border-[#2B425780] flex items-center"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  <p className="md:text-lg text-base flex items-center gap-2 font-medium text-[#2B4257] font-raleway px-10 text-center">
                    3. Client-Focused Service
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <p
              className="mb-6 text-lg md:text-xl text-[#2B4257CC] text-justify"
              data-aos="fade-up"
            >
              Hi, I'm Pablo Gavi, a dedicated Real Estate Broker based in New
              York City. With a Bachelor's Degree in Business Administration
              from New York University and 15 years of experience, I specialize
              in luxury residential properties and commercial real estate.
              Currently serving as a Senior Broker at Lifespring Realty, I am
              committed to providing exceptional service, personalized guidance,
              and expert market insights to help my clients achieve their real
              estate goals. My extensive knowledge of the NYC market, strong
              industry connections, and meticulous attention to detail ensure a
              seamless and successful transaction experience.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
              <div
                className="p-4 rounded-lg border border-[#2B425780] flex items-center"
                data-aos="zoom-in"
              >
                <p className="md:text-lg text-base flex items-center gap-2 font-medium text-[#2B4257] font-raleway">
                  <Image
                    src="/Images/About/checkmark.png"
                    height={20}
                    width={20}
                    alt="Checkmark"
                  />{" "}
                  Exceptional Market Expertise
                </p>
              </div>
              <div
                className="p-4 rounded-lg border border-[#2B425780] flex items-center"
                data-aos="zoom-in"
              >
                <p className="md:text-lg text-base flex items-center gap-2 font-medium text-[#2B4257] font-raleway">
                  <Image
                    src="/Images/About/checkmark.png"
                    height={20}
                    width={20}
                    alt="Checkmark"
                  />{" "}
                  Unique Negotiation Skills
                </p>
              </div>
              <div
                className="p-4 rounded-lg border border-[#2B425780] flex items-center"
                data-aos="zoom-in"
              >
                <p className="md:text-lg text-base flex items-center gap-2 font-medium text-[#2B4257] font-raleway">
                  <Image
                    src="/Images/About/checkmark.png"
                    height={20}
                    width={20}
                    alt="Checkmark"
                  />{" "}
                  Client-Focused Service
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 mt-10 justify-center items-center">
              <div
                className="p-6 rounded-2xl text-center"
                data-aos="fade-right"
              >
                <h4 className="text-6xl md:text-7xl mb-2 font-semibold text-[#2B4257] font-raleway">
                  15
                </h4>
                <p className="text-[#2B4257]">Years of Experience</p>
              </div>
              <div className="p-6 rounded-2xl text-center" data-aos="fade-left">
                <h4 className="text-6xl md:text-7xl mb-2 font-semibold text-[#2B4257] font-raleway">
                  300+
                </h4>
                <p className="text-[#2B4257]">Property Transactions</p>
              </div>
              <div
                className="p-6 rounded-2xl text-center"
                data-aos="fade-right"
              >
                <h4 className="text-6xl md:text-7xl mb-2 font-semibold text-[#2B4257] font-raleway">
                  1k+
                </h4>
                <p className="text-[#2B4257]">Happy Clients</p>
              </div>
              <div className="p-6 rounded-2xl text-center" data-aos="fade-left">
                <h4 className="text-6xl md:text-7xl mb-2 font-semibold text-[#2B4257] font-raleway">
                  1B+
                </h4>
                <p className="text-[#2B4257]">Net Revenue</p>
              </div>
            </div>
            <div className="text-center md:col-span-2" data-aos="fade-up">
              <Image
                src={profilePic}
                alt="Sara Petricia"
                width={699}
                height={642}
                className="rounded-lg md:max-w-[500px] mx-auto border-2 border-[#2B4257] p-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal */}
      <input
        type="checkbox"
        id="video-modal"
        className="modal-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="modal">
        <div className="modal-box bg-neutral rounded-lg p-4 relative max-w-screen-xl w-full">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle absolute z-10 btn-primary right-2 top-2"
          >
            ✕
          </button>
          <div className="flex justify-center ">
            <video ref={videoRef} className="w-full h-auto rounded-lg" controls>
              <source src="/Videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
