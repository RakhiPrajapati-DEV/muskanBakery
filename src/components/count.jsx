import React from 'react'
import { FaIceCream, FaStore } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6"

function Count() {
    return (
        <div>
            <div className="fifthSection">
                <div className="counter-container">
                    <div className="count-icons">
                        {/* <i className="fa-solid fa-ice-cream"></i> */}
                        <FaIceCream />
                    </div>

                    <div> 
                        <span className="counter" data-target="125">125</span> 
                        <span className="counter-item">+</span>
                    </div> 

                    <span className="counter-text">No of Products</span> 
                </div>


                <div className="counter-container">
                    <div className="count-icons">
                        <FaStore />
                    </div>

                    <div> 
                        <span className="counter" data-target="26">26</span> 
                        <span className="counter-item">+</span>
                    </div> 
                    
                    <span className="counter-text">Franchise/Outlet</span> 
                </div>


                <div className="counter-container">
                    <div className="count-icons">
                        <BsPersonFillAdd />
                    </div>

                    <div> 
                        <span className="counter" data-target="35">35</span> 
                        <span className="counter-item">+</span>
                    </div>

                    <span className="counter-text">Years of Experience</span> 
                </div>


                <div className="counter-container">
                    <div className="count-icons">
                        <FaPeopleGroup />
                    </div>

                    <div> 
                        <span className="counter" data-target="80">80</span> 
                        <span className="counter-item">+</span>
                    </div> 

                    <span className="counter-text">Creative Chefs & Team</span> 
                </div>

            </div>
        </div>
    )
}

export default Count;
