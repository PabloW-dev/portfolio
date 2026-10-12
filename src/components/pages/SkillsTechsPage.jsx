//ESTRUCTURA

//breve comentario de cómo pienso cuando estoy diseñando un proyecto

//FROM ONE SYSTEM TO ANOTHER (de esto a esto resuelto con vídeos)

//Technical background + training, ejemplo de un server montado con express y otro con php y cards de los cursos

import Carousel from "../general/Carousel";
import Card from "../general/Card";
import CTA from "../general/CTA";


import From1 from "../../assets/video/persistenceClickerPersistence.mp4";
import To1 from "../../assets/video/yogaGardenPersistence.mp4";
import From2 from "../../assets/video/persistenceClickerStates.mp4";
import To2 from "../../assets/video/yogaGardenFAB-CTA.mp4";



import Certificate1 from "../../assets/docs/UC-243f2d2e-801f-472f-80d8-d52e81c346c7.pdf";
import Certificate2 from "../../assets/docs/UC-39b3b775-abb4-43ef-84bf-b2cf20ddf8c6.pdf";
import Certificate3 from "../../assets/docs/UC-565f8d5a-d5e5-4697-b73f-e6602c7b7476.pdf";


export default function SkillsTechsPage({ modal }) {
  const courses = [
    {
      title: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
      state: "Juan Pablo de la Torre Valdez",
      description: "Udemy · 1 Mar 2026",
      cert: Certificate1,

    },
    {
      title: "Git + Github: Todo un sistema de control de versiones de cero",
      state: "Fernando Herrera",
      description: "Udemy · 6 Mar 2026",
      cert: Certificate2,

    },
    {
      title: "Web Personal MERN Full Stack: MongoDB, Express, React y Node",
      state: "Agustin Navarro Galdon",
      description: "Udemy · 3 Apr 2026",
      cert: Certificate3,

    }
  ];

  const CTAInfo = {
    link: "https://github.com/PabloW-dev/Backend-practice",
    state: "Backend Practice"
  };

  return (
    <div className="skill-tech">
      <Carousel>
        <section className="skill-tech__landing">
          <h1>Skills & Technical Background</h1>
          <p>Don't solve problems separately. Make them solve each other</p>
        </section>

        <section className="skill-tech__description">
          <h1>Systems, Patterns & Connections</h1>
          <p>As a systems designer, I seek to understand reality as a network of interconnected systems. A tool is not complete in isolation; it becomes part of a larger system through its interaction with the user.</p>

          <p>This perspective allows me to apply analytical and practical approaches across different areas of technology, identifying connections that, although not immediately obvious, can lead to more cohesive solutions.</p>
        </section>

        <section className="skill-tech__stack">
          <h1>Stack</h1>

          <ul>
            <li>Frontend: <span className="yellow">HTML, React.js, CSS, Sass, JavaScript</span></li>
            <li>Backend: <span  className="green">Node.js, Express.js, PHP</span></li>
            <li>Database: <span  className="red">MySQL, MongoDB</span></li>
            <li>Tools: Git, GitHub, Responsively App, Insomnia, Postman, TablePlus</li>
          </ul>
        </section>

        <section className="skill-tech__video">
          <h1>FROM PERSISTENCECLICKER</h1>
          <video
            src={From1}
            controls
            preload="metadata"
            playsInline
          />
        </section>

        <section className="skill-tech__video">
          <h1>TO YOGAGARDEN</h1>
          <video
            src={To1}
            controls
            preload="metadata"
            playsInline
          />
        </section>

        <section className="skill-tech__video">
          <h1>FROM PERSISTENCECLICKER</h1>
          <video
            src={From2}
            controls
            preload="metadata"
            playsInline
          />
        </section>

        <section className="skill-tech__video">
          <h1>TO YOGAGARDEN</h1>
          <video
            src={To2}
            controls
            preload="metadata"
            playsInline
          />
        </section>

        {courses.map((course) => (
          <div key={course.title}>
            <h1>Course</h1>
            <Card content={course} modal={modal} />
          </div>
          
        ))}
      </Carousel>

      <CTA link={CTAInfo.link} state={CTAInfo.state} />
    </div>
  )
}
