import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Sermons from "./pages/Sermons";
import Gallery from "./pages/Gallery";
import Give from "./pages/Give";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sermons" element={<Sermons/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/give" element={<Give/>}/>
      </Routes>
    </Router>
  );
};

export default App;
