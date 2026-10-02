//TO-DO: si llegase a darse un index superior a n puntos 
// solucionarlo con un hamburguer y un dropdown

import { Children, cloneElement, useState, useEffect } from "react";

import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";



export default function Carousel({ children, initialIndex, carouselKey }) {
    const [pointersDiscovered, setPointersDiscovered] = useState(
        localStorage.getItem("carousel-pointers-discovered") === "true"
    );
    

    const [direction, setDirection] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isResetting, setIsResetting] = useState(false);




    const [currentIndex, setCurrentIndex] = useState(initialIndex ?? 0);

    const slides = Children.toArray(children).map((child) =>
        cloneElement(child, { currentIndex })    
    );

    const previousIndex = 
        (currentIndex - 1 + slides.length) % slides.length;

    const nextIndex =
        (currentIndex + 1) % slides.length;


    const previous = () => {
        if (isAnimating) return;

        setDirection("previous");
        setIsAnimating(true);
    };

    const next = () => {
        if(isAnimating) return;

        setDirection("next");
        setIsAnimating(true);
    };

    const movement =
        direction === "next"
            ? -100
            : direction === "previous"
                ? 100
                : 0;

    const handleTransitionEnd = () => {
        if (!isAnimating || isResetting) return;

        setIsResetting(true);

        setCurrentIndex((currentIndex) =>
            direction === "next"
                ? (currentIndex + 1) % slides.length
                : (currentIndex - 1 + slides.length) % slides.length
        );

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsResetting(false);
                setIsAnimating(false);
                setDirection(null);
            });
        });
    };

    useEffect(() => {
        sessionStorage.removeItem(`${carouselKey}-return`);
    }, []);
    



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
            next();
        } else {
            previous();
        }

        setTouchStart(null);
    };


    
    




  return (
    <div className="carousel">
      <nav className="carousel__navigation">
        <button className="carousel__icon"
            onClick={previous}
            aria-label="Previous slide"
            disabled={isAnimating}
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
                            if (isAnimating) return;

                            setCurrentIndex(index);
                            setPointersDiscovered(true);
                            
                            localStorage.setItem("carousel-pointers-discovered", "true");
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={currentIndex === index ? "true" : undefined}
                        disabled={isAnimating}
                    >
                        <FaCircle aria-hidden="true" />
                    </button>
                );     
            })}  
        </div>
        

        <button className="carousel__icon"
            onClick={next}
            aria-label="Next slide"
            disabled={isAnimating}
        >
            <FaArrowRight aria-hidden="true" />
        </button>
      </nav>

      <div className="carousel__viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <div
            className="carousel__viewport--track"
            style={{
                transform: "translateX(-100%)"
            }}
        >
            <div
                className="carousel__slide"
                style={{
                    transform: `translateX(${isResetting ? 0 : movement}%)`,
                    transition: isResetting
                        ? "none"
                        : "transform 500ms ease"
                }}
            >{slides[previousIndex]}</div>

            <div
                className="carousel__slide"
                style={{
                    transform: `translateX(${isResetting ? 0 : movement}%)`,
                    transition: isResetting
                        ? "none"
                        : "transform 500ms ease"
                }}
                onTransitionEnd={handleTransitionEnd}
            >{slides[currentIndex]}</div>

            <div
                className="carousel__slide"
                style={{
                    transform: `translateX(${isResetting ? 0 : movement}%)`,
                    transition: isResetting
                        ? "none"
                        : "transform 500ms ease"
                }}
            >{slides[nextIndex]}</div>
        </div>
      </div>
    </div>
  );
}
