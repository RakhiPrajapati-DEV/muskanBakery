import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Admin' element={<AdminPanel />} />
        <Route path='/About' element={<About />} />
      </Routes>

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
    </BrowserRouter>
  );
}

export default App;
