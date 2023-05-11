import { Zoom } from 'react-reveal';
import { useRef, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { ReactComponent as Logo } from './logo.svg';
import Navbar from './components/navbar/Navbar.js';
import Header from './components/header/Header.js';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Footer from './components/footer/Footer.js';

function App() {
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const [darkToggle, setDarkToggle] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [navbarToggle, setNavbarToggle] = useState(false);

  useEffect(() => {
    const modeMe = (e) => {
      setDarkToggle(e.matches);
    }  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', modeMe);
  }, []);

  return (
    <div className={`scroll-smooth${ darkToggle ? ' dark' : ''}`}>
      <Helmet>
        <meta name="theme-color" content={darkToggle ? (navbarToggle ? "#171717" : "#362f78") : (navbarToggle ? "#efefef" : "#5850ec")} />
        <meta name="apple-mobile-web-app-status-bar" content={darkToggle ? navbarToggle ? "#171717" : "#362f78" : navbarToggle ? "#efefef" : "#5850ec"} />
      </Helmet>
      <Navbar link="https://www.fgentili.it/" Logo={Logo} setNavbarToggle={setNavbarToggle} darkToggle={darkToggle} setDarkToggle={setDarkToggle} title="Gentil" skillsRef={skillsRef} portfolioRef={portfolioRef} aboutRef={aboutRef} />
      <Header name="Federico Gentili" startRef={skillsRef} />
      <div className="bg-white dark:bg-neutral-800">
        <Zoom fraction={0.15}>
          <Skills ref={skillsRef} />
          <Portfolio ref={portfolioRef} />
          <About ref={aboutRef} />
        </Zoom>
        <Footer email="federicogentili05@gmail.com" darkToggle={darkToggle} creator="Federico Gentili" instagram="https://www.instagram.com/federico.gnt/" twitter="https://twitter.com/FedericoGent05/" github="https://github.com/GentilOfficial/" />
      </div>
    </div>
  );
}

export default App;
