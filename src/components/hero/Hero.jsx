import hero from "../../../public/images/hero-bg.png";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative w-full h-screen"
        // style={{ backgroundImage: `url(${hero})` }}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          src="https://res.cloudinary.com/dozupkvv3/image/upload/v1770444278/hero-bg_kcvzfg.webp"
          alt="Hero background"
          fetchPriority="high"
          decoding="async"
        />
        <figure className="relative container mx-auto bg-linear-to-t from-black/50 to-transparent h-full pt-20 md:px-[5%]">
          <h1
            className="text-center md:-mt-10 mt-20 text-[25vw]"
            style={{ fontFamily: "Varent" }}
          >
            S<span className="text-stroke">U</span>
            <span className="text-stroke">D</span>IP
          </h1>
          <div className="w-full flex md:flex-row flex-col-reverse items-center justify-between">
            <h3 className="md:static absolute bottom-0 text-6xl">FullStack</h3>
            <p className="text-lg md:text-left text-center">
              Crafting modern web apps with clean code and creative design.
            </p>
          </div>
        </figure>
      </section>
    </>
  );
};

export default Hero;
