import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react'; 
import Home from './Home.jsx';
import About from './About.jsx';
import Education from './Education.jsx';
import Resume from './Resume.jsx';

function Main() {
  const location = useLocation();

  useEffect(() => {
    const mainElement = document.querySelector('main');
    const pageHolder = document.querySelector('main > section');
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

  return (
    <Routes>
      <Route path="/portfolio/" element={<Home />} />
      <Route path="/portfolio/about" element={<About />} />
      <Route path="/portfolio/education" element={<Education />} />
      <Route path="/portfolio/resume" element={<Resume />} />
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