import React from "react";

const Loader = () => {
  return (
    <>
      <section className="fixed w-screen h-screen flex items-center justify-center top-0 inset-0 glass z-90">
        {/* <div className="md:w-1/2 w-full h-full mx-auto content-center"> */}
          <div className="loader">
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="line"></div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Loader;
