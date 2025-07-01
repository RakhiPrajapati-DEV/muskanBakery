import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Marquee from './components/marquee';
import Slider from './components/Slider';
import MainSegment from './components/MainSegment';
import Footer from './components/Footer';
import SignatureProducts from './components/SignatureProducts';
import About from './components/About';
import SecondSection from './components/secondSection';
import Testimonial from './components/Testimonial';
import Count from './components/count';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import ContactMessg from './components/contactMessg';

function HomePage() {
  return (
    <>
      <Navbar />
      <Marquee />
      <Slider />
      <SecondSection />
      <MainSegment />
      <SignatureProducts />
      <About />
      <Testimonial />
      <Count />
      <Footer />
    </>
  );
}

function LinksRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Admin" element={<AdminPanel />} />
      <Route path="/About" element={<About />} />
      <Route path="/Admin/messages" element={<ContactMessg />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LinksRoutes />
    </BrowserRouter>
  );
}

export default App;
