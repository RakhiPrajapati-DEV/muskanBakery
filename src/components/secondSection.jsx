import React from 'react'
import { FaNutritionix } from "react-icons/fa";
import { FaCookie,FaFileShield } from "react-icons/fa6";
import stamp from '../assets/images/all images/stamp/stamp.webp';
import b from '../assets/images/all images/b.webp';
import a from '../assets/images/all images/a.webp';
import d from '../assets/images/all images/d.webp';

function SecondSection() {
  return (
    <>
       <div className="secondSection">
            <div className="insideSecondSection">
                <div className="insideSecondSectionCard"> 
                    <img src={a} alt="" />
                    <div className="stamp" path id="circle">
                         <img src={stamp} alt="" className="stampIMG" /> 
                    </div>

                    <div className="insideSecondMainCard"> 
                         <img src={b} alt="" />
                         <img src={d} alt=""/> 
                    </div>
                </div>


                <div className="insideSecondSectionCard issc">
                    <h2 className="montserrat mainH2">The Taste of Tradition with Wholesome Goodness , 100% Vegetarian</h2>
                    <p className="manrope mainP">Muskan Bakery Groups - A trusted name in bakery manufacturing, we bring you 100% vegetarian delights, crafted with premium ingredients and a promise of taste, purity, and customer happiness</p>

                    <div className="insideIssc">
                        <div className="insideIsscCard"> 
                            <h1> <FaNutritionix /> </h1>
                            <h3 className="mainH3 montserrat">Nutrient-Rich Products</h3>
                            <p className="mainPP manrope">Ensuring the production of baked goods that are rich in essential nutrients, using high-quality ingredients to promote health and wellness.</p>
                        </div>

                        <div className="insideIsscCard"> 
                            <h1><FaCookie /></h1>
                            <h3 className="mainH3 montserrat">Diverse Product Range</h3>
                            <p className="mainPP manrope">Offering a wide selection of bakery products, catering to different tastes and preferences, from bread and cookies to cakes and pastries.</p>
                        </div>

                        <div className="insideIsscCard"> 
                            <h1><FaFileShield /></h1>
                            <h3 className="mainH3 montserrat">Commitment to Freshness</h3>
                            <p className="mainPP manrope">Maintaining the highest standards of freshness by following strict production schedules and using advanced packaging techniques to extend shelf.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SecondSection;
