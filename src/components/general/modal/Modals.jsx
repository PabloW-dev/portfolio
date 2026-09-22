
import { useEffect, useRef } from "react";
import { modalData, closeModal } from "./modal";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";


export default function Modals({
  modal,
  setModal
}) {

  
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modal.open || modal.type === "sitemap") return;

    function handlePointerDown(e) {
      if (!modalRef.current?.contains(e.target)) {
        closeModal(setModal, modal);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [modal.open, setModal, modal]);

  if (!modal.open || modal.type === "sitemap") return null;

  let content;
        
  switch (modal.type) {

    case "contact": 
      content = modalData.contact();
      break;

    default:
      return null; 
  }
    
  return (
    <div
      ref={modalRef} 
      className="modal"
    >
      <button
        className="modal__close"
        aria-label="Close"
        onClick={() => closeModal(setModal, modal)}
      >
        ×
      </button>

      <div className="modal__content">

        <h2>{content.title}</h2> 

        <div className="modal__content--info">
          <p className="text">{content.text}</p>
          
          <p className="email">{content.email}</p>
        </div>

        <div className="modal__buttons">
          {content.buttons?.map(button => (
            <button
              key={button.id}
              onClick={() => {

                if (button.action === "close") {
                  closeModal(setModal, modal);
                  return;
                }

                if (button.action === "send") {
                  window.location.href = `mailto:${content.email}`;
                }

                if (button.action === "enter") {
                  window.open(button.url, "_blank");
                }
              }}
            >
              {button.id === "email" && button.text} 
              {button.id === "linkedin" && (<FaLinkedin />)}
              {button.id === "github" && (<FaGithub />)}
            </button>
          ))}   
        </div>
         
      </div>
    </div>
  );
}


