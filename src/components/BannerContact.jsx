import React from 'react'
import { Link } from 'react-router-dom';

function BannerContact(){
  return (
    <>
      <div className='Banner'>
        <h1>Contact Us</h1>
        <div >
        <Link className='BannerLink' to="/">Home</Link><Link className='BannerLink' to="/ContactUs"> / Contact Us</Link>
      </div>
      </div>


    </>
  )
}

export default BannerContact;
