import React from 'react';
import { FaFacebook, FaInstagramSquare, FaYoutube, FaAmazon } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import footerLogo from '../assets/images/logo/footerLogo.png';
import amazonQr from '../assets/images/e-brouchure/amazonQr.jpg';
import muskanRealQr from '../assets/images/e-brouchure/muskanRealQr.png';

function Footer() {
  return (
    <div>
      <footer>
        <div className="insideFooter">
          <div className="footerWidgets">
            <img src={footerLogo} alt="" className="footerLogo" />
            <p className="footer-para">
              At Muskan Bakery, we’re passionate about delivering fresh, delicious, and high-quality bakery products straight from our ovens to your table. This is the perfect place for all things bakery!
            </p>
          </div>

          <div className="footerWidgets">
            <h3 className="montserrat">Quick Links</h3>
            <Link className="manropet" to="/">Home</Link>
            <a className="manrope" href="cookies.html">Our Products</a>
            <a className="manrope" href="festive-gifting-2.html">Gifting</a>
            <Link className="manrope" to="/About">About Us</Link>
            <a className="manrope" href="Franchise-2.html">Locate Us</a>
            <a className="manrope" href="contact-2.html">Contact Us</a>

            <Link className="manrope" to="/login">Login</Link>
            
          </div>

          <div className="footerWidgets">
            <h3 className="montserrat">Follow Us</h3>
            <div className="footerIcons">
              <a href="https://www.facebook.com/muskanbiscuits?mibextid=LQQJ4d">
                <h3 style={{ backgroundColor: '#3b5998' }}><FaFacebook /></h3>
              </a>

              <h3 style={{ color: 'black', backgroundColor: 'white', borderRadius: '50%' }}><FaSquareXTwitter /></h3>

              <a href="https://www.instagram.com/muskanbakerygroups/?igsh=MTNiYzBtZmkxNjFpdQ%3D%3D#">
                <h3 style={{ color: 'black', backgroundColor: 'white', borderRadius: '50%' }}><FaInstagramSquare /></h3>
              </a>

              <h3 style={{ backgroundColor: '#cd201f' }}><FaYoutube /></h3>
            </div>

            <h3 className="montserrat">Find Us On</h3>
            <div className="footerIcons">
              <h3 style={{ color: 'black', backgroundColor: 'white', borderRadius: '50%' }}><FaAmazon /></h3>
              <img src={amazonQr} style={{ height: '90px' }} />
            </div>
          </div>

          <div className="footerWidgets">
            <h3 className="montserrat">E-Brochure</h3>
            <img src={muskanRealQr} alt="" style={{ padding: '10px', backgroundColor: 'white' }} />
          </div>
        </div>

        <div className="copy montserrat">&copy; Muskan Bakery 2024-25</div>
      </footer>
    </div>
  );
}

export default Footer;
