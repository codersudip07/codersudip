// import TextPressure from "./TextPressure";

import Button from "../Button";
import Title from "../Title";

const About = () => {
  return (
    <>
      <section id="about" className="w-full pb-5 px-2 md:px-[5%]">
        <figure className="container mx-auto">
          <div className="w-full">
            <h2 className="text-[18vw] leading-none text-center">Developer</h2>
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
