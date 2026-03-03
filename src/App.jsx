import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Diagnostics from './pages/Diagnostics';
import LiteracyHub from './pages/LiteracyHub';
import Sanctuary from './pages/Sanctuary';
import GreenLab from './pages/GreenLab';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/literacy-hub" element={<LiteracyHub />} />
          <Route path="/sanctuary" element={<Sanctuary />} />
          <Route path="/green-lab" element={<GreenLab />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
