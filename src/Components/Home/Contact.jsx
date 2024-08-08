/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

AOS.init(); // Initialize AOS

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    // Simulate form submission (you can replace this with your actual submission logic)
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div
      id="contact"
      className="bg-[#496147] py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-16 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto ">
        {/* Header section */}
        <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
          <h3
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-light text-[#EFCFA0] border border-[#EFCFA0] px-2 py-1 sm:py-[11px] sm:px-[21px] inline-block mx-auto font-raleway"
          >
            Contact Me
          </h3>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#EFCFA0] font-bold sm:text-4xl text-3xl md:text-5xl font-merriweather"
          >
            Direct Message Me
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="sm:text-xl text-sm font-normal text-[#EFCFA0]"
          >
            Reach Out Directly for Personalized Real Estate Advice and Immediate
            Assistance. Let's Discuss Your Property Goals Today
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div data-aos="fade-up">
            <Image
              src="/Images/Contact/image.png"
              height={500}
              width={500}
              alt="Contact Image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div data-aos="fade-up">
            {isSubmitted ? (
              <div className="text-lg md:text-xl lg:text-[28px] leading-7 md:leading-8 font-normal font-merriweather text-neutral mb-8 bg-secondary py-20 px-4 rounded-xl">
                Thank you for your message! We'll get back to you shortly.
              </div>
            ) : (
              <>
                <p className="text-xl lg:text-3xl leading-7 md:leading-8 font-normal font-merriweather text-[#EFCFA0] mb-8">
                  Connect Today for Personalized Assistance: Your Dream Home
                  Awaits, Let's Make It Happen Together!
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 md:space-y-8 mt-5 text-[#F3E3E2CC]"
                  data-aos="fade-up"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 placeholder-[#EFCFA0] border-[#EFCFA0] bg-transparent border-b-2 focus:border-primary"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        id="address"
                        type="text"
                        placeholder="Address"
                        className="w-full p-2 bg-transparent border-b-2 placeholder-[#EFCFA0] border-[#EFCFA0] focus:border-primary"
                        {...register("address", {
                          required: "Address is required",
                        })}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.address.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-2 bg-transparent border-b-2 placeholder-[#EFCFA0] border-[#EFCFA0] focus:border-primary"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <textarea
                      id="message"
                      rows="6"
                      placeholder="Type Your Message"
                      className="w-full p-2 bg-transparent border-b-2 placeholder-[#EFCFA0] border-[#EFCFA0]focus:border-primary"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full p-2 lg:text-2xl bg-[#EFCFA0] px-4 md:px-5 py-2 md:py-2.5 mt-6 md:mt-10 rounded-lg text-[#14202E] font-medium text-base md:text-xl  transition-all duration-300 ease-in-out hover:bg-[#F9F1F0]  hover:shadow-lg hover:-translate-y-1 font-raleway"
                  >
                    Send
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
