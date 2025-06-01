import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Education from "./Education.jsx";
import NotFound from "./NotFound.jsx";
import Project from "./Project.jsx";

function Main() {
  const location = useLocation();

  useEffect(() => {
    const mainElement = document.querySelector("main");
    const pageHolder = document.querySelector("main > section");
    mainElement.style.height = "8vh";
    pageHolder.style.display = "none";
    const loadAnimation = () => {
      setTimeout(() => {
        mainElement.style.transition = "height 1s ease-in-out";
        mainElement.style.height = "90vh";
        setTimeout(() => {
          pageHolder.style.display = "flex";
        }, 500);
      }, 1000);
    };

    loadAnimation();
  }, [location]);

  useEffect(() => {
    const titles = {
      "/": "Victor-Starr | Web Portfolio 🛠️",
      "/about": "Victor-Starr | About 🛠️",
      "/education": "Victor-Starr | Education 🛠️",
    };
    document.title =
      titles[location.pathname] || "Victor-Starr | Web Portfolio 🛠️";
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
