import { useState, useEffect } from "react";

import { openModal, closeModal } from "./modal/modal";

import { FaSitemap } from "react-icons/fa";

export default function FABSitemap({ currentPath, modal, setModal }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const hasEntered = sessionStorage.getItem("Sitemap-entered");

    useEffect(() => {
        if (currentPath !== "/" || hasEntered) {
        setIsVisible(true);
        setIsAnimating(false);
        return;
        }

        sessionStorage.setItem("Sitemap-entered", "true");

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
    <button className="FAB-Sitemap"
      aria-label="Open/Close navigation"
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
          modal.type === "sitemap"
              ? closeModal(setModal)
              : openModal(setModal, {
                  open: true,
                  type: "sitemap"
              });
      }}
    >
      <FaSitemap className="icon" />
    </button>
  );
}
