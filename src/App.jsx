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

/**
 * Main component that handles routing and animations based on the current location.
 *
 * This component uses the `useLocation` hook to get the current location and performs
 * the following tasks:
 *
 * 1. Animates the height of the main element and toggles the display of the page holder
 *    section when the location changes.
 * 2. Sets the document title based on the current pathname.
 *
 * @component
 * @example
 * return (
 *   <Main />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @description
 * This component is responsible for handling the routing of the application and applying
 * animations based on the current location. It also updates the document title based on
 * the current route.
 *
 * @function Main
 *
 * @property {Object} location - The current location object from the `useLocation` hook.
 *
 * @useEffect - Animates the height of the main element and toggles the display of the page holder section when the location changes.
 * @useEffect - Sets the document title based on the current pathname.
 */

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Router basename="/portfolio">
      <Main />
    </Router>
  );
}

export default App;
