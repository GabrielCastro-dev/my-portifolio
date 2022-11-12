import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from '../pages/LandingPage/LandingPage';
import Works from '../pages/Works/Works';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

export function routes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/works' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}