import React, { useState, useEffect } from "react";
import ListSmall from './ListSmall.js';
import ListFull from './ListFull.js';
import { ReactComponent as Sun } from "./sun.svg";
import { ReactComponent as Moon } from "./moon.svg";

function Navbar({ link, Logo, skillsRef, portfolioRef, aboutRef, darkToggle, setDarkToggle, setNavbarToggle }) {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY !== 0) {
      setNavbar(true);
      setNavbarToggle(true);
    } else if(window.scrollY === 0 && menu) {
      setNavbar(true);
      setNavbarToggle(true);
    } else {
      setNavbar(false);
      setNavbarToggle(false);
    }
  }

  const showMenuChangeBackground = () => {
    if(menu) {
      setTimeout(() => {
        if(window.scrollY === 0 && navbar) {
          setNavbar(false);
          setNavbarToggle(false);
        }
      }, 100);
      setMenu(false);
    } else {
      setNavbar(true);
      setNavbarToggle(true);
      setMenu(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  })

  return (
    <nav className={navbar ? "flex fixed flex-wrap md:justify-start md:flex-nowrap z-10 w-full bg-[#efefef] dark:bg-neutral-900 shadow-md text-sm py-4" : "flex fixed flex-wrap md:justify-start md:flex-nowrap z-10 w-full bg-transparent text-sm py-4"}>
        <div className="max-w-screen-xl w-full mx-auto px-5 md:flex md:items-center md:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
                <a href={link} className="flex items-center gap-x-2 text-xl font-semibold my-drop-shadow" title="www.fgentili.it">
                  <Logo className={navbar ? "w-8 text-neutral-900 dark:text-white" : "w-8 text-white"} />
                </a>
                <div className="md:hidden flex">
                  <div className="flex items-center">
                    <button className={navbar ? "text-neutral-900 dark:text-white hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium align-middle my-drop-shadow" : "text-white hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium align-middle my-drop-shadow"} onClick={() => setDarkToggle(!darkToggle)} title="Dark Mode">
                      {darkToggle ? (<Sun className="w-5 animate-slide_up2" />) : (<Moon className="w-5 animate-slide_down2" />)}
                    </button>
                  </div>
                    <button type="button" onClick={showMenuChangeBackground} className={navbar ? "text-neutral-900 dark:text-white hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium align-middle my-drop-shadow" : "text-white hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium align-middle my-drop-shadow"} data-hs-collapse="#navbar-menu" aria-controls="navbar-menu" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden w-4 h-4" width="32" height="32" fill="currentColor"  viewBox="0 0 24 24">
                          <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <svg className="hs-collapse-open:block hidden w-4 h-4" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full hidden md:flex items-center justify-end">
              <button className={navbar ? "text-neutral-900 dark:text-white hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium align-middle my-drop-shadow" : "text-white hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium align-middle my-drop-shadow"} onClick={() => setDarkToggle(!darkToggle)} title="Dark Mode">
                {darkToggle ? (<Sun className="w-5 animate-slide_up2" />) : (<Moon className="w-5 animate-slide_down2" />)}
              </button>
            </div>
            <div id="navbar-menu" className="hs-collapse md:animate-slide_down1000 hidden overflow-hidden transition-all duration-300 basis-full md:block">
                <div className="md:hidden">
                    <ListSmall showMenuChangeBackground={showMenuChangeBackground} skillsRef={skillsRef} portfolioRef={portfolioRef} aboutRef={aboutRef} />
                </div>
                <div className="hidden md:block">
                    <ListFull navbar={navbar} skillsRef={skillsRef} portfolioRef={portfolioRef} aboutRef={aboutRef} />
                </div>
            </div>
        </div>
    </nav>
    
  );
}

export default Navbar;