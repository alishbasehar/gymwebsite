import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import Services from './pages/Services.jsx';
import Aboutus from './pages/Aboutus.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Services" element={<Services />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
