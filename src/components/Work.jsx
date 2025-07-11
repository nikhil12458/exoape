import { motion } from "motion/react";
import React, { useState } from "react";

const Work = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-screen-xl sm:relative mx-auto pt-20 py-12 px-5 sm:px-10">
        <div className="top-text flex flex-col w-full">
          <div className=" sm:right-[21.5%] sm:top-[22%] sm:absolute featured flex gap-3">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              data-v-669b4a84=""
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
                data-v-669b4a84=""
              ></path>
            </svg>
            <h3 className="capitalize">featured projects</h3>
          </div>
          <div className="work-heading">
            <h1 className="text-6xl sm:ml-28 sm:text-[15vw] sm:font-medium my-5 overflow-hidden">
              <motion.span
                initial={{ rotate: 90, y: "40%", opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                className="inline-block origin-left "
              >
                Work
              </motion.span>
            </h1>
          </div>
          <p className="font-semibold sm:right-[13%] sm:w-[20%] sm:top-[24%] sm:absolute sm:text-2xl text-md">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>

        <div className="main-body sm:grid sm:grid-cols-12 sm:grid-rows-[auto_auto] sm:gap-6 mt-10">
          <div className="elem w-full sm:mt-0 mt-10 sm:col-start-2 sm:col-end-8 sm:row-start-1 sm:row-end-3 ">
            <div className="video w-full h-[104vw] sm:w-[40vw] sm:h-[50vw] relative overflow-hidden ">
              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                data-scroll
                data-scroll-speed="-.2"
                className="hidden sm:absolute sm:top-0 sm:left-0 sm:z-[2] sm:block w-full h-full object-cover"
                src="https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
              <video
                autoPlay
                muted
                loop
                className="block sm:z-[1] w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee"
              ></video>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Ottografie</h3>
              <h3 className="capitalize opacity-40">
                Seamless Photographic Journey
              </h3>
            </div>
          </div>

          <div className="elem w-full sm:mt-0 mt-10 sm:translate-y-[35vw] sm:col-start-9 sm:col-end-13 sm:row-start-1 sm:row-end-2">
            <div className="video w-full h-[104vw] sm:h-[32vw] relative overflow-hidden ">
              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                data-scroll
                data-scroll-speed="-.2"
                className="hidden sm:block sm:absolute sm:top-0 sm:left-0 sm:z-[2] w-full h-full object-cover"
                src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"
                alt=""
              />
              <video
                autoPlay
                muted
                loop
                className="block sm:z-[1] w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"
              ></video>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Amaterasu</h3>
              <h3 className="capitalize opacity-40">
                Frontier Health Innovation
              </h3>
            </div>
          </div>

          <div className="elem w-full sm:mt-0 mt-10 sm:col-start-6 sm:col-end-13 sm:row-start-2 sm:row-end-3">
            <div className="content-center sm:relative sm:translate-y-[45vw] ">
              <div className="video w-full h-[104vw] sm:h-[42vw] sm:w-[70%] relative overflow-hidden ">
                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  data-scroll
                  data-scroll-speed="-.2"
                  className="hidden sm:block sm:absolute sm:top-0 sm:left-0 sm:z-[2] w-full h-full object-cover"
                  src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="block sm:z-[1] w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
                ></video>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Columbia Pictures</h3>
                <h3 className="capitalize opacity-40">
                  Celebrating a Century of Cinema
                </h3>
              </div>
            </div>
          </div>

          <div className="elem w-full sm:relative sm:mt-0 sm:h-[110vw] mt-10 sm:col-start-1 sm:col-end-5  sm:row-start-2 sm:row-end-3">
            <div className="center-content sm:translate-y-[70vw] sm:relative">
              <div className="video w-full h-[104vw] sm:h-[25vw] sm:w-[75%] relative overflow-hidden ">
                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  data-scroll
                  data-scroll-speed="-.2"
                  className="hidden sm:block sm:absolute sm:top-0 sm:left-0 sm:z-[2] w-full h-full object-cover"
                  src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="block sm:z-[1] w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"
                ></video>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Cambium</h3>
                <h3 className="capitalize opacity-40">
                  Pioneering Sustainable Solutions
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
