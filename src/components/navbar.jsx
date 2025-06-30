import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style.css';
import HamMenu from '.';
import logo from '../assets/images/logo/logo.jpg';
import logo2 from '../assets/images/logo/logo2.png';
import { FaAngleDown, FaBars } from 'react-icons/fa';

function Navbar() {
  return (
    <div> 
      <nav>
        <div className="insideNav">
          <a href="index-2.html">
            <img src={logo} alt="Logo" className='logo'/>
          </a>
          
          <div className="menuLinks">
            <a className="montserrat" href="index-2.html">Home</a>

            <div className="dropDown">
              <a className="montserrat">
                Our Products <FaAngleDown />
              </a>
              <div className="dropDownContent">
                <a className="montserrat" href="products2728.html?id=16">Rusks</a>
                <a className="montserrat" href="products190a.html?id=17">Cookies</a>
                <a className="montserrat" href="productse371.html?id=18">Cakes</a>
                <a className="montserrat" href="productsa9bc.html?id=19">Ice cream</a>
                <a className="montserrat" href="productse5cc.html?id=20">Savoury</a>
                <a className="montserrat" href="products6258.html?id=21">Namkeens</a>
                <a className="montserrat" href="products2e5f.html?id=22">Breads</a>
                <a className="montserrat" href="products9c8a.html?id=23">Tea cakes</a>
                <a className="montserrat" href="productsea25.html?id=24">Pastries slices</a>
                <a className="montserrat" href="products3162.html?id=26">Pickles</a>
              </div>
            </div>

            <div className="dropDown">
              <a className="montserrat">
                Gifting <FaAngleDown />
              </a>
              <div className="dropDownContent">
                <a className="montserrat" href="corporate-gifting.html">Corporate Gifting</a>
                <a className="montserrat" href="festive-gifting.html">Festive Hampers</a>
              </div>
            </div>

            <a className="montserrat" href="about.html">About Us</a>
            <div className="dropDown">
              <a className="montserrat" href="Franchise.html">
                Franchise Outlets <FaAngleDown />
              </a>
              <div className="dropDownContent">
                <a className="montserrat" href="Distributors.html">Distributors</a>
                <a className="montserrat" href="Exports.html">Exports</a>
              </div>
            </div>

            <a className="montserrat" href="contact.html">Contact Us</a>
          </div>

          <img src={logo2} alt="" className="logo logo2"/>
          <FaBars className="ham" onClick={HamMenu} />

          <button className="montserrat btn">
            <a href="assets/catalogue/muskan%20catalouge%20real_compressed.pdf" style={{ textDecoration: 'none',color:'white' }}>
              Catalogue
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
