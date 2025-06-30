import React from 'react'
import slider1 from '../assets/images/slider1.webp';
import slider2 from '../assets/images/slider2.webp';
import slider3 from '../assets/images/slider3.webp';
import slider4 from '../assets/images/slider4.webp';
import slider5 from '../assets/images/slider5.webp';

function Slider() {
  return (
    <div>
      

      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={slider4} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={slider5} className="d-block w-100" alt="..." />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Slider;
