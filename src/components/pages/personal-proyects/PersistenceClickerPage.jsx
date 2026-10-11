//aquí resulta muy importante mencionar el testing

import CTA from "../../general/CTA";
import Carousel from "../../general/Carousel";
import TableCard from "../../general/TableCard";

import PCLogo from "../../../assets/icons/PCLogo.png";

import Pc1 from "../../../assets/screenshots/Pc1.jpg";
import Pc2 from "../../../assets/screenshots/Pc2.jpg";
import Pc3 from "../../../assets/screenshots/Pc3.jpg";

import PCTrailer from "../../../assets/video/PersistenceClickerTrailer.mp4";

export default function PersistenceClickerPage() {
  const CaseStudy = {
    CS1: {
      columns: ["Simplicity", "Coverage", "Time-efficient"],
      rows: [
        ["Entity Layout System", "✓", "✕", "✓"],
        ["Global Modal System", "✓", "✓", "✓"],
        ["Menu System", "✕", "✓", "✕"]
      ],
      selected: 1
    },
    CS2: {
      columns: ["Low Cost", "Rules Out Multiple Causes", "Traces Back to Origin"],
      rows: [
        ["Target Switching Loop", "✓", "✕", "✕"],
        ["Movement-Combat Integration", "✕", "✓", "✕"],
        ["Enemy Pathfinding Logic", "✓", "✓", "✓"]
      ],
      selected: 2
    },
    CS3: {
      columns: ["Scalability", "Long-term Efficiency", "Separation of Concerns"],
      rows: [
        ["Hardcode everything", "✕", "✕", "✕"],
        ["Classes and direct instantiation", "✓", "✕", "✓"],
        ["Classes + data-processing layer", "✓", "✓", "✓"]
      ],
      selected: 2
    }
  };

  const CTAInfo = {
    link: "https://pablow-dev.github.io/PersistenceClicker/",
    state: "Alpha Desktop"
  };

  const fullScreen = (e) => {
    e.currentTarget.requestFullscreen();
  };

  return (
    <div className="persistence-clicker">
      <Carousel>
        <section className="persistence-clicker__landing">
          <img src={PCLogo} />
          <div>
            <h1>Persistence Clicker</h1>
            <p>React · JS · SCSS · Vite</p>
          </div>
        </section>
          
        <section className="persistence-clicker__WII">
          <h1>What is it?</h1>

          <p>PersistenceClicker is a fantasy of resisting the inevitable, built as an incremental game.</p>

          <p>The game revolves around two interconnected phases sharing the same map: a timeline in collapse where every second counts, and an interlude where accumulated experience is used to build infrastructure that reshapes the next cycle.</p>

          <p>Each cycle resets some states while preserving others, allowing infrastructure built between cycles to improve survival over time.</p>
        </section>

        <section className="persistence-clicker__roadmap">
          <h1>Roadmap</h1>

          <ul>
            <li><p>Alpha Desktop ·<span className="green"> Deployed</span></p></li>
            <li><p>Testing System·<span className="yellow"> Current</span></p></li>
            <li><p>Mobile Responsive</p></li>
            <li><p>Remaining Features</p></li>
            <li><p>UI/UX Improvements</p></li>
            <li><p>Content Expansion</p></li>
            <li><p>Demo</p></li>
          </ul>
        </section>

        <section className="persistence-clicker__trailer">
          <video
              src={PCTrailer}
              controls
              preload="metadata"
              playsInline
          />
        </section>
          
        <section className="persistence-clicker__picture">
          <img src={Pc1} alt="" onClick={fullScreen} />
          <h1>Autosave, Load and Manage Your Progress</h1>
        </section>

        <section className="persistence-clicker__picture">
          <img src={Pc2} alt="" onClick={fullScreen} />
          <h1>Social Media Rewards Players with In-Game EXP</h1>
        </section>

        <section className="persistence-clicker__picture">
          <img src={Pc3} alt="" onClick={fullScreen} />
          <h1>Every Seed Generates a Unique Landscape</h1>
        </section>

        <section className="persistence-clicker__table">
          <p><span className="red">PROBLEM</span>: Too much context-dependent information to manage across the game</p>
          <p><span className="yellow">ALTERNATIVES</span>:</p>
          <TableCard columns={CaseStudy.CS1.columns} rows={CaseStudy.CS1.rows} selected={CaseStudy.CS1.selected} /> 
          <p><span className="green">RESULT</span>: One simple, reusable modal system for handling information across the project</p>
        </section>
        
        <section className="persistence-clicker__table">
          <p><span className="red">PROBLEM</span>: Enemies stopped moving when approaching the central tower</p>
          <p><span className="yellow">ALTERNATIVES</span>:</p>
          <TableCard columns={CaseStudy.CS2.columns} rows={CaseStudy.CS2.rows} selected={CaseStudy.CS2.selected} /> 
          <p><span className="green">RESULT</span>: Enemy pathfinding required an additional condition to handle interruptions and correctly resume its route to the central tower</p>
        </section>
        
        <section className="persistence-clicker__table">
          <p><span className="red">PROBLEM</span>: The project has a large and growing entity scope</p>
          <p><span className="yellow">ALTERNATIVES</span>:</p>
          <TableCard columns={CaseStudy.CS3.columns} rows={CaseStudy.CS3.rows} selected={CaseStudy.CS3.selected} /> 
          <p><span className="green">RESULT</span>: An extensible entity-instantiation system that simplifies data processing and supports growing entity complexity</p>
        </section>

        <section className="persistence-clicker__WIL">
          <h1>What I Learned</h1>
          <ul>
            <li>
              <h3>Choosing the Right Data Persistence</h3>
              <p>Choosing storage solutions based on persistence needs, without unnecessary backend complexity.</p>
            </li>
            <li>
              <h3>Designing Efficient Data Flows</h3>
              <p>Managing how data moves between parts of an application efficiently.</p>
            </li>
            <li>
              <h3>Thinking in Abstractions</h3>
              <p>Designing reusable functions and behaviours that adapt to different data at runtime.</p>
            </li>
          </ul>
        </section>

        <section className="persistence-clicker__WIWC">
          <h1>What I Would Change</h1>

          <ul>
            <li>Separate Data from Application Code. Keep data files in a dedicated directory.</li>
            <li>Break Down Large Files. Split oversized files into smaller modules.</li>
          </ul>
        </section>
      </Carousel>

      <CTA link={CTAInfo.link} state={CTAInfo.state} />
    </div>
  )
}
