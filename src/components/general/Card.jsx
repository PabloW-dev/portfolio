import { NavLink, useLocation } from "react-router-dom";


export default function Card({ project, currentIndex, carouselKey, modal }) {
  const location = useLocation();

  return (
    <article className="card">
      <img src={project?.logo} alt="" className="card__img" />
      <div className="card__title">
        <h2>{project?.title}</h2>
        <span>{project?.state}</span>
      
        <p>{project?.description}</p>
        
        <NavLink to={project?.url} className="CTA__button"
          onClick={() => sessionStorage.setItem(`${carouselKey}-return`, JSON.stringify({
            index: currentIndex,
            locationKey: location.key
          }))}
          tabIndex={modal.open ? -1 : 0}
          style={{
            pointerEvents: modal.open
              ? "none"
              : "auto"
          }}
        >
          View Project
        </NavLink>
      </div>
    </article>
  )
}
