// import TextPressure from "./TextPressure";
import { useRef, useState } from "react";
import Button from "../Button";
import Title from "../Title";

const About = () => {
    const boxRef = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    const handleMove = (e) => {
      const rect = boxRef.current.getBoundingClientRect();
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
  return (
    <>
      <section id="about" className="w-full pb-5 px-2 md:px-[5%]">
        <figure className="container mx-auto">
          <div className="w-full">
            <h2 className="md:hidden text-[18vw] leading-none text-center">Developer</h2>
            <div
              ref={boxRef}
              onMouseEnter={() => setShow(true)}
              onMouseMove={handleMove}
              onMouseLeave={() => setShow(false)}
              className="relative w-full hidden md:block"
            >
              <h2 className="text-[18vw] text-stroke leading-none text-center relative z-10 pointer-events-none">
                Developer
              </h2>

              {show && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    WebkitMaskImage: `text`,
                    maskImage: `text`,
                  }}
                >
                  <div
                    className="absolute w-40 h-40 bg-(--sec)  blur-3xl rounded-full"
                    style={{
                      left: pos.x,
                      top: pos.y,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              )}

              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <mask id="text-mask">
                    <rect width="100%" height="100%" fill="black" />
                    <text
                      x="50%"
                      y="75%"
                      textAnchor="middle"
                      fontSize="18vw"
                      fill="white"
                      fontFamily="inherit"
                    >
                      Developer
                    </text>
                  </mask>
                </defs>

                <rect
                  width="100%"
                  height="100%"
                  fill="transparent"
                  mask="url(#text-mask)"
                />
              </svg>
            </div>

            <div className="flex items-center mt-5 md:mt-0">
              <Title title="About me" />
              <div className="hidden md:block w-40 h-40 rounded-full bg-(--sec) translate-x-[70vw]"></div>
            </div>
            {/* <div style={{ position: "relative", height: "300px" }}>
              <TextPressure
                text="Hello!"
                flex
                alpha={false}
                stroke={false}
                width
                weight
                italic
                textColor="#ffffff"
                strokeColor="#5227FF"
                minFontSize={36}
              />
            </div> */}
          </div>
          <div className="w-full flex md:flex-row flex-col-reverse gap-4 md:gap-0">
            <article className="md:w-1/2">
              <div>
                <h4 className="text-xl">
                  My name is{" "}
                  <span style={{ fontFamily: "Varent" }}>Sudip Das Ghosh</span>.
                </h4>
                <p className="opacity-70 my-4">
                  I’m a frontend developer and UI/UX designer passionate about
                  crafting seamless, user-focused digital experiences. I
                  specialize in building responsive websites and interfaces that
                  not only look great but also feel intuitive. Currently, I’m
                  creating accessible, modern web products at CodeCrafters. I
                  build clean, responsive websites and design smooth user
                  experiences.
                </p>
                <p className="opacity-70">
                  I’m currently a co-founder of Webina, a web agency where we
                  create highly creative frontend and full-stack websites at
                  affordable prices to help businesses build a strong online
                  presence. Alongside this, I’m also connected with Gyanmool, a
                  learning platform focused on sharing knowledge and empowering
                  learners through quality educational content.
                </p>
                <Button
                  onclick={() =>
                    (window.location.href = "https://www.gyanmool.in")
                  }
                  name="explore gyanmool"
                  style="mt-5"
                />
              </div>
            </article>
            <aside className="md:w-1/2 flex justify-center md:justify-end">
              <img
                className="md:w-1/2 h-130 object-cover object-top"
                src="https://res.cloudinary.com/dozupkvv3/image/upload/v1770444383/Sudip_Ok_lmxinq_xbgqfp.webp"
                alt=""
              />
              {/* <img
                className="w-full h-100 object-cover"
                src="https://res.cloudinary.com/dozupkvv3/image/upload/v1770378896/about_v1ags2.png"
                alt=""
              /> */}
            </aside>
          </div>
        </figure>
      </section>
    </>
  );
};

export default About;
