import React from "react";
import { GoCircle } from "react-icons/go";

function Footer() {
  return (
    <div className="w-full relative bg-[#070707] overflow-x-hidden">
        <div className="video absolute z-[1] w-[80%] sm:w-[65%] top-32 -right-11">
            <video muted autoPlay loop src="../src/video/video-6.mp4"></video>
        </div>
      <div className="max-w-screen-xl mx-auto mt-20 pt-20 py-12 px-5 sm:px-10">
        <div className="relative z-[2] footer-content text-[#E0CCBB]">
          <div className="heading-top">
            <h1 className="text-6xl sm:text-[10rem]">Our</h1>
            <h1 className="text-6xl sm:text-[10rem]">Story</h1>
          </div>
          <div className="para mt-9 sm:mt-12">
            <p className="text-lg sm:text-[1.8rem] w-[90%] sm:w-[40%] opacity-[.8]">
              The story behind Exo Ape is one of exploration, creativity and
              curiosity.
            </p>
          </div>
          <div className="anchor flex items-center gap-2 mt-9 sm:hidden">
            <GoCircle className="text-zinc-400 text-[.65rem]" />
            <a
              className="inline-block text-lg leading-none border-b-1"
              href="#"
            >
              Our Story
            </a>
          </div>
          <div className="line w-full h-[.5px] my-9 sm:my-16 bg-[#E0CCBB]"></div>
          <div className="footer-footer display flex relative justify-between items-baseline-last mb-10">
            <div className="left hidden sm:block">
              {[
                "Willem II Singel 8",
                "6041 HS, Roermond",
                "The Netherlands",
                "hello@exoape.com",
              ].map((item, index) => {
                return (
                  <a
                    key={index}
                    className="block text-lg leading-none py-2 capitalize"
                    href="#"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="center">
              {["Work", "studio", "news", "contact"].map((item, index) => {
                return (
                  <a
                    key={index}
                    className="block text-lg leading-none py-2 capitalize"
                    href="#"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="right">
              {["Behance", "Dribbble", "Linkedin", "Instagram"].map(
                (item, index) => {
                  return (
                    <a
                      key={index}
                      className="block text-lg leading-none py-2 capitalize"
                      href="#"
                    >
                      {item}
                    </a>
                  );
                }
              )}
            </div>
            <div className="anchor hidden sm:flex sm:items-center sm:gap-2 mt-9 ">
            <GoCircle className="text-zinc-400 text-[.65rem]" />
            <a
              className="inline-block text-lg leading-none border-b-1"
              href="#"
            >
              Our Story
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
