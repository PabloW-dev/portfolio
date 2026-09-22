import { useState, useEffect } from "react";

import { openModal, closeModal } from "./modal/modal";

import FabCta from "../../assets/icons/FAB-CTA-icon.png";

export default function FABCTA({ currentPath, modal, setModal }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const hasEntered = sessionStorage.getItem("FAB-entered");

  useEffect(() => {
    if (currentPath !== "/" || hasEntered) {
      setIsVisible(true);
      setIsAnimating(false);
      return;
    }

    sessionStorage.setItem("FAB-entered", "true");

    setIsAnimating(true);
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      })
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  }, [currentPath]);

  return (
    <button className="FAB-CTA"
      aria-label="Open/Close contact"
      onPointerDown={(e) => e.stopPropagation()}
      style={{
        opacity: isVisible
          ? 1
          : 0,
        pointerEvents: isAnimating
          ? "none"
          : "auto"
      }}
      onClick={() => {
        modal.type === "contact" 
          ? closeModal(setModal)
          : openModal(setModal, {
            open: true,
            type: "contact"
          });
      }}
    >
      <img className="icon" src={FabCta} alt="CTA" />
    </button>
  );
}
