import React, { useState } from "react";
import Button from "../Button";

const Header = () => {
  const navItems = ["home", "about", "projects", "services"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 w-full h-20 content-center bg-transparent md:pointer-events-none z-90">
        {/* NAVBAR */}
        <nav className="glass container mx-auto h-10 w-fit content-center px-8 rounded-sm md:pointer-events-auto">
          <ul className="uppercase text-(--primary) h-full hidden md:flex items-center gap-6 py-2 font-medium text-sm">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:scale-95 hover:cursor-pointer duration-100"
              >
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}

            <li className="py-4">
              <Button
                onclick={() => (window.location.href = "tel:+917001894943")}
                name="contact"
              />
            </li>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white z-90"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {/* MOBILE ASIDE MENU */}
        <aside
          className={`glass imp fixed md:hidden w-screen h-screen inset-0
          flex items-center justify-center
          transition-all duration-300 -z-20
          ${menuOpen ? "translate-y-0" : "translate-y-full"}`}
        >
          <ul className="uppercase text-(--primary) flex flex-col items-center gap-6 font-medium text-sm">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-bold hover:scale-95 duration-100"
                >
                  {item}
                </a>
              </li>
            ))}

            <li>
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  window.location.href = "tel:+917001894943";
                }}
                name="contact"
              />
            </li>
          </ul>
        </aside>
      </header>
    </>
  );
};

export default Header;
