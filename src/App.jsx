import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader";

const About = lazy(() => import("./components/about/About"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Services = lazy(() => import("./components/services/Services"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Loader />}>
          <About />
          <Projects />
          <Services />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
