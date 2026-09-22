import { useState, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import PersonalProjectsPage from "./components/pages/PersonalProjectsPage";
import ExternalProyectsPage from "./components/pages/ExternalProyectsPage";
import SkillsTechsPage from "./components/pages/SkillsTechsPage";

import FABCTA from "./components/general/FAB-CTA";
import Modals from "./components/general/modal/Modals";
import FABSitemap from "./components/general/FAB-Sitemap";
import ModalSitemap from "./components/general/modal/ModalSitemap";
import YogaGardenPage from "./components/pages/personal-proyects/YogaGardenPage";
import PersistenceClickerPage from "./components/pages/personal-proyects/PersistenceClickerPage";

export default function App() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  const [modal, setModal] = useState({
    open: false,
    type: null,
    payload: null
  });
  
  useEffect(() => {
    if (previousPath.current !== location.pathname) {
      setModal({
        open: false,
        type: null,
        payload: null
      });
    }
    
    previousPath.current = location.pathname;
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <main>
        <Routes>
          <Route path="/" 
            element={<HomePage 
              previousPath={previousPath.current}
              modal={modal}
              />} 
          />

          <Route path="/personal-projects" 
            element={<PersonalProjectsPage />} />
          <Route path="/skills-tech" 
            element={<SkillsTechsPage />} />
          <Route path="/external-projects" 
            element={<ExternalProyectsPage />} />

            
          <Route path="/persistence-clicker" 
            element={<PersistenceClickerPage />} />
          <Route path="/yoga-garden" 
            element={<YogaGardenPage />} />
          
        </Routes>
      </main>

      <FABCTA 
        currentPath={location.pathname}
        modal={modal}
        setModal={setModal}
      />

      <FABSitemap 
        currentPath={location.pathname}
        modal={modal}
        setModal={setModal}
      />

      <Modals 
        modal={modal}
        setModal={setModal}
      />

      <ModalSitemap
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
}
