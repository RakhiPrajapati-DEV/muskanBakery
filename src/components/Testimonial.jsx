import React from 'react'
import Shape from '../assets/images/all images/Testi/Shape.svg';
import Testimain from '../assets/images/all images/Testi/Testimain.webp';

function Testimonial(){
  return (
    <div>
      <div className="sixthSection">
            <div>
                <h2 className="montserrat mainH2">Testimonials</h2></div>
            <div className="insideSixthSection">
                <div className="insideSixthSectionCard">
                    <div className="slideshow-container">
                        <div className="mySlides00"> <q className="manrope">Muskan Bakery never fails to impress! Their cakes are always fresh, beautifully decorated, and absolutely delicious. The staff is friendly and goes above and beyond to make every occasion special. I highly recommend them for any celebration!</q>
                            <div className="stars-testimonial"> &#9733;&#9733;&#9733;&#9733;&#9733;
                                <p className="manrope">Tarun Sharma (Agra)</p>
                            </div>
                        </div>
                        <div className="mySlides00"> <q className="manrope">I've been a loyal customer of Muskan Bakery for years, and they consistently deliver top-notch quality. From their bread to pastries, everything is baked to perfection. The flavors are rich, and the presentation is always on point. A must-visit for any dessert lover!</q>
                            <div className="stars-testimonial"> &#9733;&#9733;&#9733;&#9733;&#9733;
                                <p className="manrope">Kanika Rawat (Mathura)</p>
                            </div>
                        </div>
                        <div className="mySlides00"> <q className="manrope">Muskan Bakery made my wedding cake, and it was a dream come true! Not only did it look stunning, but it tasted even better. They listened to all my ideas and turned them into a masterpiece. Thank you for making our day so special!</q>
                            <div className="stars-testimonial"> &#9733;&#9733;&#9733;&#9733;&#9733;
                                <p className="manrope">Sushant Pathak (Delhi)</p>
                            </div>
                        </div>
                        <div className="mySlides00"> <q className="manrope">I can't get enough of Muskan Bakery's cookies and brownies! They're the perfect blend of soft, chewy, and bursting with flavor. Every bite is pure bliss. The quality and taste are unmatched, making it my go-to spot for sweet treats.</q>
                            <div className="stars-testimonial"> &#9733;&#9733;&#9733;&#9733;&#9733;
                                <p className="manrope">Sunita Singh (Noida)</p>
                            </div>
                        </div>
                        <div className="mySlides00"> <q className="manrope">Every time I visit Muskan Bakery, I'm greeted with a warm smile and the irresistible aroma of freshly baked goods. Their attention to detail and commitment to quality are evident in every product. It's a bakery that truly cares about its customers.</q>
                            <div className="stars-testimonial"> &#9733;&#9733;&#9733;&#9733;&#9733;
                                <p className="manrope">Amit Sharma (Gurugram)</p>
                            </div>
                        </div> <a className="prev" onclick="plusSlides(-1)">❮</a> <a className="next" onclick="plusSlides(1)">❯</a> </div>
                    <div className="dot-container"> <span className="dot" onclick="currentSlide(1)"></span> <span className="dot" onclick="currentSlide(2)"></span> <span className="dot" onclick="currentSlide(3)"></span> </div>
                </div>
                <div className="insideSixthSectionCard"> 
                  <img className="testi01" src={Shape}  alt=""/> 
                <img className="testi02" src={Testimain} alt=""/> </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial;
