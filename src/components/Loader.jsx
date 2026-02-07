import React from "react";

const Loader = () => {
  return (
    <>
      <section className="fixed w-screen h-screen top-0 inset-0 glass z-90">
        <div className="md:w-1/2 h-full mx-auto content-center">
          <div class="loader mx-auto">
            <div class="text">
              <span>Loading</span>
            </div>
            <div class="text">
              <span>Loading</span>
            </div>
            <div class="text">
              <span>Loading</span>
            </div>
            <div class="text">
              <span>Loading</span>
            </div>
            <div class="text">
              <span>Loading</span>
            </div>
            <div class="text">
              <span>Loading</span>
            </div>
            <div class="text">
              <span>Loading</span>
            </div>
            <div class="text">
              <span>Loading</span>
            </div>
            <div class="text">
              <span>Loading</span>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loader;
