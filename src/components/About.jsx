import React from 'react'
import m1 from '../assets/images/all images/m1.webp';

function About(){
  return (
    <div>
      <div className="fifthSection">
            <div className="insideFifthSection">
                <div className="insideFifthSectionTab"> <img src={m1} alt=""/> </div>
                <div className="insideFifthSectionTab ifst">
                    <h2 className="mainH2">MUSKAN- Family Bakers since 1990</h2>
                    <p className="mainP">The old family business was started on a small scale basis. Thereafter, it prospered generation after generation and the company was born in 1990, with the aim of serving good quality products with an everlasting taste.
                        <br/>Excellence is the result of high intention, sincere efforts, intelligent direction, skillful execution and vision to see the opportunities. Our company is proud of its various production units, where products are made from finest quality of ingredients, besides our major ingredienti.e. passion and love. </p>
                    <button className="btn btn1"> <a style={{textDecoration: 'none',color:'white'}} href="about-2.html">About Us</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;
