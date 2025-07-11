import gsap, { Linear, Power4, ScrollTrigger } from "gsap/all";
import { useReducedMotion } from "motion/react";
import React, { useEffect, useRef } from "react";

function Images() {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const parent = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1
      }
    });
    tl
    .to(first.current,{
      x: "80%",
      ease: Linear
    }, 'a')
    .to(second.current,{
      x: "-80%",
      ease: Linear
    }, 'a')
    .to(third.current,{
      x: "-80%",
      ease: Linear
    }, 'a')
    .to(fourth.current,{
      x: "80%",
      ease: Linear
    }, 'a')
  })
  
  return (
    <div ref={parent} className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[40%] sm:w-[20%] sm:h-[70%]  h-1/2 relative">
        <div ref={first} className="absolute w-20 sm:w-40 sm:h-[15rem] h-[7rem] overflow-hidden -right-1/3 top-6">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={second} className="absolute w-[8rem] sm:w-[19rem] -left-1/2 sm:-left-2/3 top-1/3 object-cover aspect-video ">
          <video
            muted
            loop
            autoPlay
            className="w-full h-full scale-[1.2] overflow-hidden"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div ref={third} className="absolute w-[9rem] sm:w-[17rem] aspect-video overflow-hidden -left-[70%] -bottom-10 ">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={fourth} className="absolute w-[9rem] overflow-hidden aspect-[1.5/1] sm:w-[17rem] sm:-right-[50%] -right-[70%] -bottom-[20%] sm:-bottom-[20%] ">
          <video
            muted autoPlay 
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
