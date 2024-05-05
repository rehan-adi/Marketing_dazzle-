import React from "react";
import { IoStar } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";

function HomeBanner() {
  return (
    <div className="w-full z-20">
      <div className=" flex justify-start px-4 lg:px-20 gap-7 items-center max-h-fit pt-36 pb-16 lg:h-screen">
        <div className="lg:w-2/4 w-[90vw]">
          <h3 className="px-3 py-2 flex justify-center items-center gap-2 rounded-md font-semibold text-center text-xs text-[#B5B5B5] w-[55vw] lg:w-1/3 bg-[#FFFFFF0D]">
            <span className="inline-block">
              <svg
                fill="#3067FF"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <g>
                  <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z"></path>
                </g>
              </svg>
            </span>
            EXPERTISE YOU CAN TRUST{" "}
            <span className="inline-block">
              <svg
                fill="#3067FF"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <g>
                  <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z"></path>
                </g>
              </svg>
            </span>
          </h3>
          <h1 className="font-bold mt-4 text-white text-4xl lg:text-5xl">
            Empowering your brand in the digital universe
          </h1>
          <p className="font-normal text-lg text-[#B5B5B5] mt-7">
            Join us as we carve a path to success, driven by passion, powered by
            innovation, and fueled by the collective spirit of our team. we
            believe in the power of bold ideas, and we're here to turn them into
            reality.
          </p>
          <div className="flex justify-start mt-8 gap-6 lg:gap-9 flex-col lg:flex-row items-start   lg:items-center">
            <button className="bg-[#3067ff] px-8 font-semibold text-lg rounded-md lg:py-3 py-4">
              Free Consultation
            </button>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-center gap-5">
              <span className="text-[#B5B5B5]">Rivew On</span>
              <span className="flex gap-1">< IoStar  className="text-red-500"/>< IoStar className="text-red-500"/>< IoStar className="text-red-500"/>< IoStar className="text-red-500"/>< FaStarHalfAlt className="text-red-500" /></span>
              </div>
              <div className="flex  items-center gap-4">
                <img
                  src="	https://zenfy-next-js.vercel.app/assets/img/home1/icon/clutch-logo-white.svg"
                  alt=""
                />
                <span className="text-[#B5B5B5]">(50 reviews)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4 lg:flex hidden">
          <img
            src="https://zenfy-next-js.vercel.app/assets/img/home1/banner-img3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#1E1E1F] py-5 flex justify-center items-center">
        <marquee direction="left" behavior="scroll" scrollamount="6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#3067FF" className="inline-block mr-5" width="17" height="17" viewBox="0 0 17 17"><path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z"></path></svg>
          <span className="mr-4 font-semibold text-xl text-[#B5B5B5]">WELCOME TO INNOVATETECH SOLUTIONS</span>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="#3067FF" className="inline-block mr-5" width="17" height="17" viewBox="0 0 17 17"><path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z"></path></svg>
          <span className="mr-4 font-semibold text-xl text-[#B5B5B5]">WE THRIVE ON CREATIVITY</span>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="#3067FF" className="inline-block mr-5" width="17" height="17" viewBox="0 0 17 17"><path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z"></path></svg>
          <span className="mr-4 font-semibold text-xl text-[#B5B5B5]">YOUR SATISFACTION IS OUR PRIORITY</span>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="#3067FF" className="inline-block mr-5" width="17" height="17" viewBox="0 0 17 17"><path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z"></path></svg>
          <span className="mr-4 font-semibold text-xl text-[#B5B5B5]">WE BELIEVE IN THE POWER OF COLLABORATION</span>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="#3067FF" className="inline-block mr-5" width="17" height="17" viewBox="0 0 17 17"><path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z"></path></svg>
          <span className="mr-4 font-semibold text-xl text-[#B5B5B5]">
            WE INVITE YOU TO JOIN US ON THIS EXCITING JOURNEY
          </span>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="#3067FF" className="inline-block mr-5" width="17" height="17" viewBox="0 0 17 17"><path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z"></path></svg>
          <span className="mr-4 font-semibold text-xl text-[#B5B5B5]">WE THRIVE ON CREATIVITY<svg xmlns="http://www.w3.org/2000/svg"  fill="#3067FF" className="inline-block ml-5" width="17" height="17" viewBox="0 0 17 17"><path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z"></path></svg></span>
        </marquee>
      </div>
    </div>
  );
}

export default HomeBanner;
