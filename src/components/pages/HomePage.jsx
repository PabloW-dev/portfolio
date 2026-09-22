

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import PWLogo from "../../assets/icons/PW-logo.png";
import UXicon from "../../assets/icons/UX-Strategy-icon.png";
import PPSicon from "../../assets/icons/Pragmatical-PS-icon.png";
import ADicon from "../../assets/icons/Analytical-Debugging-icon.png";

import Decoration from "../../assets/icons/HomeDecoration.png";
import Footer from "../general/Footer";



export default function HomePage({ previousPath, modal }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const hasEntered = sessionStorage.getItem("portfolio-entered");

  useEffect(() => {
    if (hasEntered || previousPath !== "/") {
        setIsVisible(true);
        setIsAnimating(false);
        return;
    }

    sessionStorage.setItem("portfolio-entered", "true");

    setIsAnimating(true);
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      })
    });

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [previousPath]);

  return (
    <div className="home"
      style={{
        opacity: isVisible 
          ? 1
          : 0
      }}
    >
      <img className="decoration" src={Decoration} alt="" />

      <div className="home__center">

        <div className="home__hero">
          <img className="logo" src={PWLogo} alt="Pablo W" />
          <h1 className="title">Pablo W <br /> Web Developer</h1>

          <div className="home__hero-SKL">
            <div>
              <img className="icon" src={ADicon} alt="" />
              <p className="green">Analytical <br /> Debugging</p>
            </div>
            <div>
             <img className="icon" src={PPSicon} alt="" /> 
             <p className="yellow">Pragmatic <br /> Problem <br /> Solving</p>
            </div>
            <div>
              <img className="icon" src={UXicon} alt="" />
              <p className="red">UX Strategy</p>
            </div>
          </div>
        </div>

        <nav className="home__menu">
          <ul style={{
            pointerEvents: isAnimating || modal.open
              ? "none"
              : "auto"
          }}>
            <li><NavLink 
              to="/personal-projects" 
              className="menu__button"
              tabIndex={isAnimating || modal.open ? -1 : 0}
            >Personal Projects</NavLink></li>
            <li><NavLink 
              to="/skills-tech" 
              className="menu__button"
              tabIndex={isAnimating || modal.open ? -1 : 0}
            >Skills & Technical Background</NavLink></li>
            <li><NavLink 
              to="/external-projects" 
              className="menu__button"
              tabIndex={isAnimating || modal.open ? -1 : 0}
            >External Projects</NavLink></li>
          </ul>
        </nav>

      </div>

      <Footer  
        previousPath={previousPath}
        modal={modal}
      />
    </div>
  );
}
