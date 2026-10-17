import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import ArmorInfo from './components/ArmorInfo';
import About from './components/ui/About';
import Contact from './components/ui/Contact';

function App(armor) {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/armor/:id" element={<ArmorInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
