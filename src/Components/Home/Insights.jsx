import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const insightsData = [
  {
    title: "Transaction Triumph Tales",
    description:
      "Explore inspiring stories of successful real estate transactions and learn valuable tips from experienced professionals.",
    imageUrl: "https://i.ibb.co/p3gm9Nf/Rectangle-3922.png",
    link: "#",
  },
  {
    title: "Neighborhood Narratives",
    description:
      "Delve into detailed descriptions of the most sought-after neighborhoods and what makes them unique.",
    imageUrl: "https://i.ibb.co/p3gm9Nf/Rectangle-3922.png",
    link: "#",
  },
  {
    title: "Market Movement",
    description:
      "Stay updated with the latest market trends and insights to make informed real estate decisions.",
    imageUrl: "https://i.ibb.co/p3gm9Nf/Rectangle-3922.png",
    link: "#",
  },
  {
    title: "Homeowner Highlights",
    description:
      "Read about the experiences of homeowners and get inspired by their journeys in the real estate world.",
    imageUrl: "https://i.ibb.co/p3gm9Nf/Rectangle-3922.png",
    link: "#",
  },
  {
    title: "Homeowner Highlights",
    description:
      "Read about the experiences of homeowners and get inspired by their journeys in the real estate world.",
    imageUrl: "https://i.ibb.co/p3gm9Nf/Rectangle-3922.png",
    link: "#",
  },
];

export default function Insights() {
  return (
    <div id="insights" className=" md:py-24 py-24 lg:py-32  overflow-hidden">
      <div className="max-w-screen-xl mx-auto mb-10 md:mb-20  px-4 sm:px-8 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 justify-between items-end">
          <div data-aos="fade-right">
            <h1 className="text-3xl md:text-[42px]  lg:text-5xl font-merriweather font-normal text-neutral">
              Insights
            </h1>
            <p className="text-base md:text-xl lg:text-2xl font-normal text-[#F3E3E2B2] font-raleway mt-3 text-justify">
              Explore vibrant communities, discover hidden gems, and find the
              perfect neighborhood that matches your lifestyle with our expert
              local insights.
            </p>
          </div>
          <div className="flex justify-end" data-aos="fade-left">
            <button className="mt-2 md:mt-8 bg-primary px-4 md:px-5 py-2 md:py-2.5  rounded-lg text-neutral font-medium text-base md:text-xl font-roboto transition-all duration-300 ease-in-out hover:bg-neutral hover:text-primary hover:shadow-lg hover:-translate-y-1">
              See all
            </button>
          </div>
        </div>
      </div>
      <Marquee
        className="lg:max-w-screen-xl 2xl:max-w-none mx-auto"
        speed={60}
        pauseOnHover={true}
      >
        <div
          className="flex mr-5 gap-5 justify-start items-start w-full flex-nowrap"
          data-aos="zoom-in"
        >
          {insightsData.map((insight, index) => (
            <div key={index} className="max-w-[300px] md:max-w-[350px]">
              <Image
                src={insight.imageUrl}
                height={250}
                width={250}
                alt={insight.title}
                className="w-full object-cover"
              />
              <div className="flex flex-col gap-2 mt-4">
                <h5 className="text-neutral text-lg md:text-xl lg:text-2xl font-normal font-merriweather">
                  {insight.title}
                </h5>
                <p className="text-[#F3E3E2B2] text-sm md:text-base lg:text-lg font-raleway">
                  {insight.description}
                </p>
                <a
                  className="text-sm md:text-lg lg:text-xl font-medium font-roboto text-neutral underline underline-offset-4"
                  href={insight.link}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
