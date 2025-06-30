import React from 'react'
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";
import SignProduct1 from '../assets/images/SignatureProducts/signProduct1.jpg';
import SignProduct2 from '../assets/images/SignatureProducts/signProduct2.png';
import SignProduct3 from '../assets/images/SignatureProducts/signProduct3.jpg';
import SignProduct4 from '../assets/images/SignatureProducts/signProduct4.jpg';
import SignProduct5 from '../assets/images/SignatureProducts/signProduct5.jpg';
import SignProduct6 from '../assets/images/SignatureProducts/signProduct6.png';
import SignProduct7 from '../assets/images/SignatureProducts/signProduct7.jpg';
import SignProduct8 from '../assets/images/SignatureProducts/signProduct8.jpg';
import SignProduct9 from '../assets/images/SignatureProducts/signProduct9.jpg';
import SignProduct10 from '../assets/images/SignatureProducts/signProduct10.jpg';
import SignProduct11 from '../assets/images/SignatureProducts/signProduct11.jpg';

import '../style.css';
 

function SignatureProducts() {
    return (
        <div>
            <div className="fourthSection">
                <h2 className="montserrat mainH2">Our Signature Products</h2>
                <div className="slider" id="slider">
                    <div className="slide" id="slide">

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct1} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">sugar free breed</h3>
                        </div>

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct2} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">Multigrain Delight</h3>
                        </div>

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct3} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">Masala Kaju</h3>
                        </div>

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct4} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">choco walnut cake</h3>
                        </div>

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct5} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">Low Calorie Rusk</h3>
                        </div>

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct6} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">Red Velvet Bliss</h3>
                        </div>

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct7} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">Diet Mixture</h3>
                        </div>

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct8} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">Burger Bun</h3>
                        </div>

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct9} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">green chilli Pickles</h3>
                        </div>

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct10} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">Suji Rusk</h3>
                        </div>

                        <div className="product">
                            <div className="insideProductIMG"> <img src={SignProduct11} alt="" /> </div>
                            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <h3 className="manrope mainH3">matra</h3>
                        </div> 

                    </div>
                    <button className="ctrl-btn pro-prev"><FaAngleLeft /></button>
                    <button className="ctrl-btn pro-next"><FaAngleRight /></button>
                </div>
            </div>
        </div>
    )
}

export default SignatureProducts;
