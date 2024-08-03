import React from "react";

function HomeBusiness() {
  return (
    <div className="bg-[#242627] w-full flex lg:flex-row flex-col justify-around items-center px-4 lg:px-0">
      <div className="lg:w-[39vw] w-full lg:relative">
        <img
          src="https://zenfy-next-js.vercel.app/assets/img/home1/case-study-banner-img.jpg"
          className="h-full lg:flex hidden opacity-40 w-[36vw]"
          alt=""
        />
        <div class="lg:absolute top-12 left-0 lg:px-4 py-8 text-white lg:p-6">
          <h3 className="flex justify-start items-center gap-2 rounded-md font-semibold text-center text-xs text-[#3067FF] w-[55vw] lg:w-[15vw]">
            <span className="inline-block">
              <svg
                fill="#B5B5B5"
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
            BUSINESS TRANSFORMATIONS{" "}
            <span className="inline-block">
              <svg
                fill="#B5B5B5"
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
          <h1 class="text-4xl mt-3 font-bold">Success in the Field</h1>
        </div>
        <div class="lg:absolute bottom-6 left-0 text-white lg:p-6">
          <p class="text-base lg:flex hidden w-3/4">
            Dive into the success story of [Client/Project Name] and witness
            firsthand the transformative journey that exemplifies the impact of
            Zenfy solutions.
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mt-7">
            Read More
          </button>
        </div>
      </div>

      <div className="lg:w-[55vw] w-full flex py-10 lg:py-0 lg:flex-row flex-col justify-between gap-8 lg:gap-3 items-center">
        <div className="bg-black rounded-lg p-7 w-[95vw] lg:w-[44vw]">
          <div className="overflow-hidden rounded-md">
            <img
              src="https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img1.jpg"
              className="overflow-hidden hover:scale-110 duration-500"
              alt=""
            />
          </div>
          <div className="py-5">
            <h3 className="text-xs text-[#3067FF] mb-3 mt-2 tracking-wider font-medium">STARTUP COMPANY</h3>
            <h1 className="text-2xl font-semibold">Navigating Growth A Startup Agency Success Story.</h1>
            <p className="mt-5 mb-7 text-[#B5B5B6]">
              In this case study, we dissect the challenges faced and the
              remarkable outcomes achieved through our collaborative efforts.
            </p>
            <a href="" className="text-xs hover:text-[#3067ff] hover:no-underline hover:duration-200 mt-3 font-semibold underline underline-offset-2 tracking-wider">LEARN MORE<span className="inline-block ml-1"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="17" height="9" viewBox="0 0 17 9"><path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z"></path><path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z"></path></svg></span></a>
          </div>
        </div>
        <div className="bg-black rounded-lg p-7 w-[95vw] lg:w-[44vw]">
          <div className="overflow-hidden rounded-md">
            <img
              src="https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img2.jpg"
              className="overflow-hidden hover:scale-110 duration-500"
              alt=""
            />
          </div>
          <div className="py-5">
            <h3 className="text-xs text-[#3067FF] mb-3 mt-2 tracking-wider font-medium">IT AGENCY</h3>
            <h1 className="text-2xl font-semibold">Digital Transformation Unveiled The IT Farm Experience.</h1>
            <p className="mt-5 mb-7 text-[#B5B5B6]">
            This case study unveils the strategic roadmap, the technology stack deployed, and the tangible benefits reaped by Egenslab.
            </p>
            <a href="" className="text-xs hover:text-[#3067ff] hover:no-underline hover:duration-200 mt-3 font-semibold underline underline-offset-2 tracking-wider">LEARN MORE<span className="inline-block ml-1"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="17" height="9" viewBox="0 0 17 9"><path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z"></path><path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z"></path></svg></span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBusiness;
