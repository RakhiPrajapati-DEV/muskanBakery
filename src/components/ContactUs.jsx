import React, { useState } from 'react'
import Navbar from './navbar'
import BannerContact from './BannerContact';
import Footer from './Footer';
import { FaComment, FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa6";
import axios from 'axios';

function ContactUs() {
    const [UserName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/Contact', {
                UserName,
                email,
                Phone,
                message
            });
            alert("Message sent successfully!");
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } catch (err) {
            alert("Error sending message!");
            console.error(err);
        }

    }



    return (
        <div>
            <Navbar />
            <BannerContact />

            <div className="contactSecond">
                <div className="insideContactSecond">
                    <div className="insideContactSecondCard">
                        <h2 className="montserrat mainH2">Connect with Us—We'd Love to Hear from You!</h2> </div>
                    <div className="insideContactSecondCard">
                        <p className="manrope mainP">Feel free to ask questions, share feedback, or simply enjoy the baked goodness with us. Let's make every moment sweet together!</p>
                    </div>
                </div>
            </div>


            <div className="contactThird">
                <div className="insideContactThird">
                    <div className="insideContactThirdCard">
                        <div className="contactCard"> <FaComment className='contactIcons' />
                            <div className="insideContactCard">
                                <h3 className="montserrat">Chat To Us</h3>
                                <a href="mailto:contact@muskanbakery.com">
                                    <p className="manrope">contact@muskanbakery.com</p>
                                </a>
                            </div>
                        </div>
                        <div className="contactCard"> <FaHouseUser className='contactIconsHouse' />
                            <div className="insideContactCard">
                                <h3 className="montserrat">Visit Our Head Office</h3>
                                <h2>Radha Foods & Kharbanda Enterprises</h2>
                                <p className="manrope">A-1, 347 Swadeshi Compound, Ghaziabad, Uttar Pradesh</p>
                            </div>
                        </div>
                        <div className="contactCard"> <FaPhoneAlt className='contactIcons' />
                            <div className="insideContactCard">
                                <h3 className="montserrat">Call Us</h3>
                                <p className="manrope">+91-8447766676</p>
                                <p className="manrope">+91-9873277790</p>
                                <p className="manrope">+91-9958845150</p>
                                <p className="manrope">+91-97118 37565</p>


                            </div>
                        </div>
                        <div className="contactCard"> <FaClock className='contactIcons' />
                            <div className="insideContactCard">
                                <h3 className="montserrat">Working Hours</h3>
                                <p className="manrope">Mon-sat: 8 AM - 5 PM</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="insideContactThirdCard ictc1">
                        <form onSubmit={handleSubmit} method="POST">

                            <input type="text" name="fullname" value={UserName} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                            <input type="email" className="manrope" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            <input type="tel" className="manrope" name="phone" value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                            <input type="text" className="manrope" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
                            <button type="submit" className="btn btn1">Submit Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs;
