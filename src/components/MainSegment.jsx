import React from 'react'
import cookies from '../assets/images/cookies.png';
import ruskd from '../assets/images/ruskd.png';
import savoury from '../assets/images/savoury.png';
import icecream from "../assets/images/icecream.png";
import cakes from '../assets/images/cakes.png';

function MainSegment() {
    return (
        <div>
            <div className="thirdSection">
                <h2 className="montserrat mMainH2">Our Main Segments</h2>

                <div className="insideSampleSection">

                    <div className="insideSampleSectionCard" style={{width:'20%',height:'50%'}}>

                        <div className="insideSampleSectionCardIMG">
                             <img src={cookies} alt="" /> 
                        </div>

                        <div>
                            <h3 className="manrope mainH3">Cookies</h3>
                            <button className="view btn btn1">
                               <a href="products0b30.html?id=2" style={{ textDecoration: 'none',color:'red' }}>View All</a>
                            </button>
                        </div>
                    </div>

                    <div className="insideSampleSectionCard" style={{width:'20%',height:'50%'}}>
                        <div className="insideSampleSectionCardIMG"> 
                            <img src={ruskd} alt="" /> 
                        </div>

                        <div>
                            <h3 className="manrope mainH3">Rusks</h3>
                            <button className="view btn btn1">
                                <a href="productsd708.html?id=3" style={{ textDecoration: 'none',color:'red'  }}>View All</a>
                            </button>
                        </div>
                    </div>

                    <div className="insideSampleSectionCard" style={{width:'20%',height:'50%'}}>
                        <div className="insideSampleSectionCardIMG"> 
                            <img src={cakes} alt="" /> 
                        </div>

                        <div>
                            <h3 className="manrope mainH3">Cakes</h3>
                            <button className="view btn btn1">
                               <a href="productsdcfd.html?id=4" style={{ textDecoration: 'none',color:'red'  }}>View All</a>
                            </button>
                        </div>
                    </div>

                    <div className="insideSampleSectionCard" style={{width:'20%',height:'50%'}}>
                        <div className="insideSampleSectionCardIMG"> 
                            <img src={icecream} alt="" /> 
                        </div>

                        <div>
                            <h3 className="manrope mainH3">Ice cream</h3>
                            <button className="view btn btn1">
                                <a href="productsd61c.html?id=5" style={{ textDecoration: 'none',color:'red'  }}>View All</a>
                            </button>
                        </div>
                    </div>

                    <div className="insideSampleSectionCard" style={{width:'20%',height:'50%'}}>
                        <div className="insideSampleSectionCardIMG"> 
                            <img src={savoury} alt="" /> 
                        </div>

                        <div>
                            <h3 className="manrope mainH3">Savoury</h3>
                            <button className="view btn btn1">
                                <a href="products3a9f.html?id=6" style={{ textDecoration: 'none',color:'red' }}>View All</a>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MainSegment;
