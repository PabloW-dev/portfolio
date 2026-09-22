//TO-DO: si llegase a darse un index superior a n puntos 
// solucionarlo con un hamburguer y un dropdown

import { Children, useState } from "react";

import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";



export default function Carousel({ children }) {
    const [pointersDiscovered, setPointersDiscovered] = useState(
        localStorage.getItem("carousel-pointers-discovered") === "true"
    );



    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = Children.toArray(children);

    const previous = () => {
        setCurrentIndex(
            (currentIndex - 1 + slides.length) % slides.length
        );
    };

    const next = () => {
        setCurrentIndex(
            (currentIndex + 1) % slides.length
        );
    };





    const [touchStart, setTouchStart] = useState(null);

    const handlePointerDown = (e) => {
        setTouchStart(e.clientX);
    };

    const handlePointerUp = (e) => {
        if (touchStart === null) return;

        const difference = e.clientX - touchStart;

        if(Math.abs(difference) < 50) {
            setTouchStart(null);
            return;
        }

        if (difference < 0) {
            previous();
        } else {
            next();
        }

        setTouchStart(null);
    };





  return (
    <div className="carousel">
      <nav className="carousel__navigation">
        <button className="carousel__icon"
            onClick={previous}
            aria-label="Previous slide"
        >
            <FaArrowLeft aria-hidden="true" />
        </button>

        <div className="carousel__container">
            {Children.map(children, (_, index) => {

                return (
                    <button
                        key={index}
                        className={`carousel__pointer ${
                            !pointersDiscovered &&
                            index === (currentIndex + 1) % slides.length
                                ? "carousel__pointer--hint"
                                : ""
                        }`}
                        onClick={() => {
                            setCurrentIndex(index);
                            setPointersDiscovered(true);
                            localStorage.setItem("carousel-pointers-discovered", "true");
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={currentIndex === index ? "true" : undefined}
                    >
                        <FaCircle aria-hidden="true" />
                    </button>
                );     
            })}  
        </div>
        

        <button className="carousel__icon"
            onClick={next}
            aria-label="Next slide"
        >
            <FaArrowRight aria-hidden="true" />
        </button>
      </nav>

      <div className="carousel__content"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {slides[currentIndex]}
      </div>
    </div>
  );
}
