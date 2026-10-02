//Aquí incoming projects por ahora

import Carousel from "../general/Carousel";
import Card from "../general/Card";


import { carouselData } from "../../data/config/carouselData";


import PCLogo from "../../assets/icons/PCLogo.png";
import YGLogo from "../../assets/icons/YGLogo.png";

export default function PersonalProjectsPage({ initialIndex, modal }) {
  const projects = [
    {
      logo: PCLogo,
      title: "Persistence Clicker",
      description: "Two interconnected game loops evolving through the same persistent world",
      state: "Desktop Alpha · Deployed",
      url: "/persistence-clicker"
    },
    {
      logo: YGLogo,
      title: "Yoga Garden",
      description: "A learning environment built around contribution and creation, where every user grows their own tree from their practice",
      state: "Desktop Frontend · Deployed",
      url: "/yoga-garden"
    }
  ];

  const carouselKey = carouselData.personalProjects.key;

  return (
    <div className="personal-projects">
      <Carousel initialIndex={initialIndex} carouselKey={carouselKey}>
        <section className="personal-projects__intro">
          <h1>Personal Projects</h1>

          <div>
            <p>DETECT </p> 
            <p className="arrow">↓</p>
            <p>SOLVE </p>
            <p className="arrow">↓</p>
            <p>GUIDE</p>
          </div>
        </section>

        {projects.map((project) => (
            <Card key={project.title} project={project} carouselKey={carouselKey} modal={modal} />
        ))}

        <section className="personal-projects__incoming">
          <h1>Incoming Projects</h1>

          <div>
            <h3>Debate Map</h3>
            <p>
              A web platform for structured debate and argumentation, designed to provide a space where ideas can be challenged through reasoned arguments, peer arbitration, and a gamified system that helps users develop their debating skills.
            </p>
          </div>
        </section>
      </Carousel> 
    </div>
  )
}
