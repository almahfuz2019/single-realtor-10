import React from "react";
import Image from "next/image";
import testimonialImage from "../../../public/Images/Testimonial/testimonial_Image.png"; // Ensure this path is correct

const Testimonial = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-16 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Header section */}
        <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
          <h3
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-light text-[#2B4257] border border-[#2B4257] px-2 py-1 sm:py-[11px] sm:px-[21px] inline-block mx-auto font-raleway"
          >
            Testimonial
          </h3>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#2B4257] font-bold sm:text-4xl text-3xl md:text-5xl font-merriweather"
          >
            Insight of Clients Review
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="sm:text-xl text-sm font-normal text-[#2B4257CC]"
          >
            Discover What Our Clients Say: Honest Reviews, Experiences, and
            Success Stories from Satisfied Homeowners
          </p>
        </header>

        <div className="relative flex flex-col lg:flex-row items-center gap-8">
          <div
            className="relative z-20 w-full lg:w-1/2 bg-[#2B4257] text-white p-10 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  className="mr-2"
                  src="/Images/Testimonial/star.png"
                  height={40}
                  width={40}
                  alt="Star"
                  data-aos="zoom-in"
                  data-aos-delay={`${i * 100}`}
                />
              ))}
            </div>
            <div
              className="h-[1px] w-full bg-[#EFCFA0] mb-4"
              data-aos="fade-right"
              data-aos-delay="600"
            ></div>
            <p
              className="md:text-lg text-[#EFCFA0] text-base font-medium mb-4"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              Working with John was a game-changer! His knowledge of the market
              and dedication to finding us the perfect home made the process
              seamless. He listened to our needs and negotiated a great deal. We
              couldn't be happier with our new home. Highly recommend!
            </p>
            <div
              className="flex items-center gap-6 mb-4"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <Image
                src="/Images/Testimonial/client1.png" // Ensure this path is correct
                alt="Adam & Polen Smith"
                width={150}
                height={100}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <p className="text-[#EFCFA0CC] text-xl font-merriweather ">
                  Adam & Polen Smith
                </p>
                <p className="text-xl text-[#EFCFA0CC]">Happy Clients</p>
              </div>
            </div>
            <div
              className="h-[1px] w-full bg-[#EFCFA0] mb-4"
              data-aos="fade-right"
              data-aos-delay="900"
            ></div>
            <div
              className="flex justify-between items-center mt-4"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              <p className="text-3xl text-[#EFCFA0] text-center font-merriweather ">
                05/18
              </p>
              <div className="flex gap-2">
                <Image
                  src="/Images/Testimonial/client2.png" // Ensure this path is correct
                  alt="Client 1"
                  width={120}
                  height={100}
                  className="rounded-lg"
                />
                <Image
                  src="/Images/Testimonial/client2.png" // Ensure this path is correct
                  alt="Client 2"
                  width={120}
                  height={100}
                  className="rounded-lg"
                />
                <Image
                  src="/Images/Testimonial/client3.png" // Ensure this path is correct
                  alt="Client 3"
                  width={120}
                  height={100}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div
            className="relative ml-0 lg:-ml-40 w-full lg:w-1/2"
            data-aos="fade-left"
          >
            <Image
              src={testimonialImage}
              alt="Testimonial Background"
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
