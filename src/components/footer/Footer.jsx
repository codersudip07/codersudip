import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-120 bg-[#060606] px-2 md:px-[5%]">
        <figure
          className="w-full h-full flex flex-col md:flex-row md:justify-between py-10 bg-center bg-cover pb-10 md:pb-15"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dozupkvv3/image/upload/v1770444250/footer_chiw4n.webp)",
          }}
        >
          <div className="md:w-1/3 h-full content-end">
            <h3 className="text-2xl">Connect with me</h3>
            <ul className="flex text-3xl gap-4 my-3">
              <li>
                <a
                  className="hover:text-(--sec) ease-in duration-100"
                  href="https://www.instagram.com/codersudip07"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-(--sec) ease-in duration-100"
                  href="https://www.facebook.com/sudip.das.ghosh/"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-(--sec) ease-in duration-100"
                  href="https://www.linkedin.com/in/sudip-das-ghosh/"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-(--sec) ease-in duration-100"
                  href="https://www.youtube.com/@coderSudip07"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  className="flex items-center gap-1"
                  href="tel: +917001894943"
                >
                  <IoMdCall /> +91 70018 94943
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-1"
                  href="mailto: codersudip07@gmail.com"
                >
                  <IoMdMail /> codersudip07@gmail.com
                </a>
              </li>
            </ul>
            <p className="text-sm mt-2">
              I transform innovative ideas into reality through thoughtful
              design and meaningful.
            </p>
          </div>
          <div className="md:w-1/3 content-end">
            <p className="md:text-right text-center md:mt-0 mt-5">
              Copyright &copy; Sudip Das Ghosh 2026
            </p>
          </div>
        </figure>
      </footer>
    </>
  );
}

export default Footer