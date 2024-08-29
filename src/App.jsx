
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Education from './Education.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        {/* Add more routes as needed */}
      </Routes>
  </Router>
  );
}

export default App;
