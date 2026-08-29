import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Education from "./Education.jsx";
import NotFound from "./NotFound.jsx";
import Project from "./Project.jsx";

function Main() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const titles = {
      "/": "Victor-Starr | Web Portfolio 🛠️",
      "/about": "Victor-Starr | About 🛠️",
      "/education": "Victor-Starr | Education 🛠️",
      "/projects": "Victor-Starr | Projects 🛠️",
    };

    document.title =
      titles[location.pathname] || "Victor-Starr | Web Portfolio 🛠️";
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <div id="loading">
          <span></span>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
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
