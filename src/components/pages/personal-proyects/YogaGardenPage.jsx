//ESTRUCTURA:

//ANIMACIÓN DE ENTRADA EMULANDO EL MISMO FEEL QUE EL PROYECTO, NAVEGACIÓN EN "ÁRBOL" CON SVG, el logo en el tronco y ya ir ramificando, qué tiene que tener:

//YogaGarden Frontend Desktop version deployed   CTA → Live / GitHub  ESTE CTA tiene que estar ahí clarito, pero el FAB de este tipo de Pages debería tener un "volver al origen" por el tipo de navegación que va a tener: mapa con límites definidos y navegación asistida por buttons, mucho mejor que un drag. Todo en el mismo plano pero desborda por todas partes y los buttons desplazan de una cosa a otra mediante el svg, por eso hace falta el FAB de volver al origen, y además al usar buttons me evito el drag de los huevos y el desplazamiento libre que resulta un follón

//What is it? qué es → qué problema/producto resuelve → qué hiciste tú. (esta parte de qué problema resuelve sigo sin tenerla resuelta, sé que se refiere a nivel técnico pero la pregunta está expresada de culo para contestarla) Y empiezan los screenshots.

//Current State + Roadmap

//CASE STUDIES: PROBLEM
//   ↓
//DIAGNOSIS
//   ↓
//ALTERNATIVES
//   ↓
//ANALYSIS
//   ↓
//DECISION
//   ↓
//IMPLEMENTATION

//Technical: qué he usado, esto seguramente se puede poner en el origen junto a lo demás y cabe perfecto

//Reflection: What I learned? What I would do differently today? 3–5 decisiones retrospectivas.

//button de volver a home en el origen

//persistence clicker muy parecido pero sin la estructura de árbol, otra animación y otra estructura que de el feel adecuado

import CTA from "../../general/CTA";
import Carousel from "../../general/Carousel";
import TableCard from "../../general/TableCard";

import YGLogo from "../../../assets/icons/YGLogo.png";

import Yg1 from "../../../assets/screenshots/Yg1.jpg";
import Yg2 from "../../../assets/screenshots/Yg2.jpg";
import Yg3 from "../../../assets/screenshots/Yg3.jpg";

import YGtrailer from "../../../assets/video/yogaGardenTrailer.mp4";


export default function YogaGardenPage() {
  const CaseStudy = {
    CS1: {
      columns: ["Maintainability", "Bundle Size", "Time-efficient"],
      rows: [
        ["Images", "✕", "✕", "✕"],
        ["Icons", "✓", "✓", "✕"],
        ["Font", "✓", "✓", "✓"]
      ],
      selected: 2
    },
    CS2: {
      columns: ["Debuggability", "Reliability", "Time-efficient"],
      rows: [
        ["Adjust coordinates manually", "✕", "✕", "✕"],
        ["Shared reference point", "✓", "✓", "✓"],
        ["Replace the reference systems", "✕", "✓", "✕"]
      ],
      selected: 1
    },
    CS3: {
      columns: ["Shared state", "Reactive updates", "Loose coupling"],
      rows: [
        ["Pass data through props", "✓", "✓", "✕"],
        ["Centralize data in a file", "✓", "✕", "✓"],
        ["Manage state through Context", "✓", "✓", "✓"]
      ],
      selected: 2
    }
  };

  const CTAInfo = {
    link: "https://pablow-dev.github.io/YogaGarden/",
    state: "Desktop version"
  };

  const fullScreen = (e) => {
    e.currentTarget.requestFullscreen();
  };

  return (
    <div className="yoga-garden">
      <Carousel>
        <section className="yoga-garden__landing">
          <img src={YGLogo} />
          <div>
            <h1>Yoga Garden</h1>
            <p>React · JS · SCSS · Vite</p>
          </div>
        </section>
          
        <section className="yoga-garden__WII">
          <h1>What is it?</h1>

          <p>Yoga Garden is a space for anyone who wants to deepen their knowledge of yoga, from practice and teaching to its history and philosophy.</p>

          <p>The platform is built around a community-driven approach: users don't just consume content, they contribute to the growth of the library and create their own tree from their practice through the class builder.</p>

          <p>The website is designed to feel more like becoming part of a growing ecosystem.</p>
        </section>

        <section className="yoga-garden__roadmap">
          <h1>Roadmap</h1>

          <ul>
            <li><p>Desktop Fronted ·<span className="green"> Deployed</span></p></li>
            <li><p>Backend ·<span className="yellow"> Current</span></p></li>
            <li><p>Mobile Responsive</p></li>
            <li><p>Content Expansion</p></li>
            <li><p>UI/UX Improvements</p></li>
            <li><p>Refactoring</p></li>
            <li><p>General Improvements</p></li>
          </ul>
        </section>

        <section className="yoga-garden__trailer">
          <video
              src={YGtrailer}
              controls
              preload="metadata"
              playsInline
          />
        </section>
          
        <section className="yoga-garden__picture">
          <img src={Yg1} alt="" onClick={fullScreen} />
          <h1>More than just a place to create yoga classes</h1>
        </section>

        <section className="yoga-garden__picture">
          <img src={Yg2} alt="" onClick={fullScreen} />
          <h1>Participate in expanding the library</h1>
        </section>

        <section className="yoga-garden__picture">
          <img src={Yg3} alt="" onClick={fullScreen} />
          <h1>In-depth research on yoga topics</h1>
        </section>

        <section className="yoga-garden__table">
          <p><span className="red">PROBLEM</span>: Hundreds of images bloated the project</p>
          <p><span className="yellow">ALTERNATIVES</span>:</p>
          <TableCard columns={CaseStudy.CS1.columns} rows={CaseStudy.CS1.rows} selected={CaseStudy.CS1.selected} /> 
          <p><span className="green">RESULT</span>: A single, lightweight font replaced hundreds of individual image assets</p>
        </section>
        
        <section className="yoga-garden__table">
          <p><span className="red">PROBLEM</span>: Camera, tree and UI animations kept falling out of sync</p>
          <p><span className="yellow">ALTERNATIVES</span>:</p>
          <TableCard columns={CaseStudy.CS2.columns} rows={CaseStudy.CS2.rows} selected={CaseStudy.CS2.selected} /> 
          <p><span className="green">RESULT</span>: One reference. All synchronized. No coordinate rework</p>
        </section>
        
        <section className="yoga-garden__table">
          <p><span className="red">PROBLEM</span>: Multiple steps needed to read and modify the same state at the same time</p>
          <p><span className="yellow">ALTERNATIVES</span>:</p>
          <TableCard columns={CaseStudy.CS3.columns} rows={CaseStudy.CS3.rows} selected={CaseStudy.CS3.selected} /> 
          <p><span className="green">RESULT</span>: Context enabled reactive, shared state across steps without building a separate state-management system</p>
        </section>

        <section className="yoga-garden__WIL">
          <h1>What I Learned</h1>
          <ul>
            <li>
              <h3>Debugging methodology</h3>
              <p>I developed a more systematic debugging process, learning to trace problems through abstract analysis and deduction.</p>
            </li>
            <li>
              <h3>Systems of responsibility</h3>
              <p>I learned to evaluate which level of centralization the data required before designing the project architecture.</p>
            </li>
            <li>
              <h3>AI-assisted development ≠ AI-trusting development</h3>
              <p>I sharpened my discernment when evaluating AI responses before implementing anything.</p>
            </li>
          </ul>
        </section>

        <section className="yoga-garden__WIWC">
          <h1>What I Would Change</h1>

          <ul>
            <li>I would design the mobile version first.</li>
            <li>I would spend more time defining responsibilities and component boundaries before implementation.</li>
          </ul>
        </section>
      </Carousel>

      <CTA link={CTAInfo.link} state={CTAInfo.state} />
    </div>
  )
}
