import React, { useRef, useState } from "react";
import Title from "../Title";
import { GiChargedArrow } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      name: "Frontend Development",
      img: "https://res.cloudinary.com/dozupkvv3/image/upload/v1770444664/hover_vrqdo7.webp",
      video:
        "https://res.cloudinary.com/dozupkvv3/video/upload/v1770441055/hover_kiksc1.webm",
    },
    {
      name: "UI/UX Design",
      img: "https://res.cloudinary.com/dozupkvv3/image/upload/v1770445142/hover1_ziwwcq.webp",
      video:
        "https://res.cloudinary.com/dozupkvv3/video/upload/v1770445739/c5607ed0c2870ebf3c61f50335f0ea85_720w_kqgr9h.webm",
    },
    {
      name: "Responsive Web Design",
      img: "https://res.cloudinary.com/dozupkvv3/image/upload/v1770444664/hover_vrqdo7.webp",
      video:
        "https://res.cloudinary.com/dozupkvv3/video/upload/v1770446475/vecteezy_abstract-blue-energy-sphere-transparent-round-bright_18057825_1_1_g2jwnh.webm",
    },
    {
      name: "Performance Optimization",
      img: "https://res.cloudinary.com/dozupkvv3/image/upload/v1770445142/hover1_ziwwcq.webp",
      video:
        "https://res.cloudinary.com/dozupkvv3/video/upload/v1770447653/00197dae6dea30136b46e8f0ce4cdaa4_1_l5tbnx.webm",
    },
    {
      name: "FullStack Web Development",
      img: "https://res.cloudinary.com/dozupkvv3/image/upload/v1770444664/hover_vrqdo7.webp",
      video:
        "https://res.cloudinary.com/dozupkvv3/video/upload/v1770445742/c6801ebd955b28513f8c1d31cee0d509_ehkewf.webm",
    },
  ];
  
  const [videoSrc, setVideoSrc] = useState(null);
  const videoRef = useRef(null);

  const moveVideo = (e) => {
    if (!videoRef.current) return;

    videoRef.current.style.left = e.pageX + 20 + "px";
    videoRef.current.style.top = e.pageY + 20 + "px";
  };

  const showVideo = (video) => {
    setVideoSrc(video);
    videoRef.current.style.opacity = 1;
    videoRef.current.style.scale = 1;
  };

  const hideVideo = () => {
    videoRef.current.style.opacity = 0;
    videoRef.current.style.scale = 0.8;
  };


  return (
    <>
      <section id="services" className="w-full pt-15 py-5 px-2 md:px-[5%]">
        <Title style="mb-5" title="Services" />
        <figure className="md:flex">
          <article className="md:w-1/2 flex flex-col justify-between content-center">
            <h3 className="text-5xl">
              END-TO-END DEVELOPMENT OF SCALABLE, FAST, AND SECURE WEB
              APPLICATIONS.
            </h3>
            <button
              onClick={() => (window.location.href = "tel:+917001894943")}
              className="hidden md:block w-40 h-40 rounded-full content-center bg-(--sec) mt-30 hover:cursor-pointer hover:rotate-45 ease-in duration-150"
            >
              <FaLocationArrow className="text-7xl mx-auto" />
            </button>
          </article>
          <aside className="md:w-1/2">
            <ul className="w-full mt-5 md:mt-0 md:pl-4">
              {services.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => showVideo(item.video)}
                  onMouseLeave={hideVideo}
                  onMouseMove={moveVideo}
                  className="services w-full relative flex items-center justify-between py-6 text-lg border-b border-b-(--sec) cursor-pointer z-20"
                >
                  <GiChargedArrow className="ml-4 icon" />
                  <h3 style={{ fontFamily: "Varent", paddingRight: "16px" }}>
                    {item.name}
                  </h3>
                  <img
                    className="absolute w-full h-0 object-cover opacity-80 pointer-events-none -z-10"
                    src={item.img}
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div
                    ref={videoRef}
                    // className="video scale-0 absolute w-50 h-50 left-1/2 top-1/2 -translate-1/2 rounded-lg pointer-events-none overflow-hidden z-50"
                    className="fixed w-64 h-40 pointer-events-none opacity-0 scale-90 transition-all ease-in duration-200 z-50 rounded-xl overflow-hidden"
                    style={{ left: 0, top: 0 }}
                  >
                    {videoSrc && (
                      <video
                        className="w-full h-full object-cover object-center mx-auto"
                        // src={item.video}
                        src={videoSrc}
                        muted
                        autoPlay
                        loop
                        preload="none"
                        playsInline
                      ></video>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </figure>
      </section>
    </>
  );
};

export default Services;
