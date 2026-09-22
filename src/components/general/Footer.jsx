import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Footer({ previousPath, modal }) {
    const location = useLocation();

    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const hasEntered = sessionStorage.getItem("footer-entered");
    
    useEffect(() => {
        if (hasEntered || previousPath !== "/") {
            setIsVisible(true);
            setIsAnimating(false);
            return;
        }
    
        sessionStorage.setItem("footer-entered", "true");
    
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
    <div className="footer"
        style={{
        opacity: isVisible 
          ? 1
          : 0
        }}
    >
      {location.pathname === "/" && (
        <nav className="footer__menu">
          <ul style={{
            pointerEvents: isAnimating || modal.open
              ? "none"
              : "auto"
          }}>
            <li><NavLink 
              to="/personal-projects" 
              className="footer__button"
              tabIndex={isAnimating || modal.open ? -1 : 0}
            >Projects</NavLink></li>
            <li><NavLink 
              to="/skills-tech" 
              className="footer__button"
              tabIndex={isAnimating || modal.open ? -1 : 0}
            >Skills</NavLink></li>
            <li><NavLink 
              to="/external-projects" 
              className="footer__button"
              tabIndex={isAnimating || modal.open ? -1 : 0}
            >Volunteer</NavLink></li>
          </ul>
        </nav>
      )}
    </div>
  )
}
