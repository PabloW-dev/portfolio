
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { modalData, closeModal } from "./modal";

export default function ModalSitemap({
  modal,
  setModal
}) {
    const sitemapRef = useRef(null);

  useEffect(() => {
    if (!modal.open || modal.type !== "sitemap") return;

    function handlePointerDown(e) {
      if (!sitemapRef.current?.contains(e.target)) {
        closeModal(setModal, modal);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [modal.open, setModal, modal]);

  if (!modal.open || modal.type !== "sitemap") return null;

  const content = modalData.sitemap();
        
  

  return (
    <div
      ref={sitemapRef} 
      className="sitemap"
    >
        <button
        className="sitemap__close"
        aria-label="Close"
        onClick={() => closeModal(setModal, modal)}
      >
        ×
      </button>

      <div className="sitemap__content">

        <h2>{content.title}</h2> 

        <div className="sitemap__sitemap">

            <NavLink className="sitemap__buttons" to="/">
                Home
            </NavLink>
            <NavLink className="sitemap__buttons" to="/personal-projects">
                Projects
            </NavLink>
            <NavLink className="sitemap__buttons" to="/skills-tech">
                Skills
            </NavLink>
            <NavLink className="sitemap__buttons" to="/external-projects">
                Volunteer
            </NavLink>

            <NavLink className="sitemap__buttons" to="/persistence-clicker">
                Persistence <br /> Clicker
            </NavLink>

            <NavLink className="sitemap__buttons" to="/yoga-garden">
                Yoga <br /> Garden
            </NavLink>
        </div>

        <div className="sitemap__scroll-space" />
      </div>
      
    </div>
  )
}
