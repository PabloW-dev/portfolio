import { NavLink, useLocation } from "react-router-dom";


export default function Card({ content, currentIndex, carouselKey, modal }) {
  const location = useLocation();

  return (
    <article className="card">
      {content.logo && (
        <img src={content?.logo} alt="" className="card__img" />
      )}
      <div className="card__title">
        <h2>{content?.title}</h2>
        <span>{content?.state}</span>
      
        <p>{content?.description}</p>
        
        {content.url && (
          <NavLink to={content?.url} className="CTA__button"
            onClick={() => {
              if (!carouselKey) return;
              
              sessionStorage.setItem(`${carouselKey}-return`, JSON.stringify({
                index: currentIndex,
                locationKey: location.key
            }))}}
            tabIndex={modal.open ? -1 : 0}
            style={{
              pointerEvents: modal.open
                ? "none"
                : "auto"
            }}
          >
            View Project
          </NavLink>
        )}
        
        {content.cert && (
          <a
            href={content.cert}
            target="_blank"
            rel="noopener noreferrer"
            className="CTA__button"
            tabIndex={modal.open ? -1 : 0}
            style={{
              pointerEvents: modal.open
                ? "none"
                : "auto"
            }}
          >
            View Certificate
          </a>
        )}
      </div>
    </article>
  )
}
