"use client";
import React from "react";

export default function WorkProcess() {
  return (
    <div
      id="work-process"
      className="max-w-screen-xl mx-auto py-24 lg:py-32  px-4 sm:px-8 lg:px-8 overflow-hidden"
    >
      <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-10 md:mb-20">
        <h1
          className="text-3xl md:text-[42px]  lg:text-5xl font-merriweather font-normal text-neutral"
          data-aos="fade-up"
        >
          Work Process
        </h1>
        <p
          className="text-base md:text-xl lg:text-2xl font-normal text-[#F3E3E2B2] font-raleway mt-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Streamlined Steps to Your Dream Home: Our Proven Process Ensures a
          Smooth Journey from Initial Consultation to Closing and Beyond.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-8  lg:mb-0">
        <div
          className="bg-neutral py-6 px-6 md:py-7 md:px-8 lg:py-8 lg:px-10 rounded-2xl flex items-start justify-between gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-merriweather bg-primary inline-block text-neutral px-4 py-1 rounded-lg">
            1
          </p>
          <div>
            <h5 className="font-normal text-lg md:text-xl lg:text-2xl text-primary font-merriweather mb-4 lg:mb-6">
              Initial Consultation and Needs Assessment
            </h5>
            <p className="text-sm md:text-base lg:text-xl font-normal font-raleway text-[#14202ECC] leading-6 lg:leading-8">
              We begin by meeting with clients to understand their unique needs,
              preferences, and goals. This involves discussing budget, desired
              property features, and any specific requirements to tailor a
              personalized real estate plan.
            </p>
          </div>
        </div>

        <div
          className="bg-neutral py-6 px-6 md:py-7 md:px-8 lg:py-8 lg:px-10 rounded-2xl flex items-start justify-between gap-6 lg:mt-28"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-merriweather bg-primary inline-block text-neutral px-4 py-1 rounded-lg">
            2
          </p>
          <div>
            <h5 className="font-normal text-lg md:text-xl lg:text-2xl text-primary font-merriweather mb-4 lg:mb-6">
              Market Research and Property Search
            </h5>
            <p className="text-sm md:text-base lg:text-xl font-normal font-raleway text-[#14202ECC] leading-6 lg:leading-8">
              Leveraging in-depth knowledge of the local market and extensive
              network, I conduct thorough research to identify suitable
              properties. I provide clients with a curated list of options that
              meet their criteria, ensuring a focused and efficient search
              process.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div
          className="bg-neutral py-6 px-6 md:py-7 md:px-8 lg:py-8 lg:px-10 rounded-2xl flex items-start justify-between gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-merriweather bg-primary inline-block text-neutral px-4 py-1 rounded-lg">
            3
          </p>
          <div>
            <h5 className="font-normal text-lg md:text-xl lg:text-2xl text-primary font-merriweather mb-4 lg:mb-6">
              Property Tours and Evaluation
            </h5>
            <p className="text-sm md:text-base lg:text-xl font-normal font-raleway text-[#14202ECC] leading-6 lg:leading-8">
              I arrange and accompany clients on property tours, offering expert
              insights and evaluations of each property. I highlight key
              features, potential drawbacks, and help clients envision how each
              property could meet their needs.
            </p>
          </div>
        </div>

        <div
          className="bg-neutral py-6 px-6 md:py-7 md:px-8 lg:py-8 lg:px-10 rounded-2xl flex items-start justify-between gap-6 lg:mt-28"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-merriweather bg-primary inline-block text-neutral px-4 py-1 rounded-lg">
            4
          </p>
          <div>
            <h5 className="font-normal text-lg md:text-xl lg:text-2xl text-primary font-merriweather mb-4 lg:mb-6">
              Negotiation and Closing
            </h5>
            <p className="text-sm md:text-base lg:text-xl font-normal font-raleway text-[#14202ECC] leading-6 lg:leading-8">
              Once a property is selected, I use my strong negotiation skills to
              secure the best possible terms for clients and manage all aspects
              of the closing process, from handling paperwork to coordinating
              with other professionals, ensuring a stress-free transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
