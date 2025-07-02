import React from 'react';
import logo from '../assets/images/logo/logo.jpg';
import { Link } from 'react-router-dom';
import Messages from './Message';

function AdminPanel() {
  return (
    <>
    <nav className='adminMain' style={{width:'100%',height:'5rem'}}>

      <div className='adminImg'>
        <img src={logo} alt="Logo" className='logo'/>
      </div>


      <div className='adminLogout'>
        <h2>Welcome to Muskan Bakery</h2>
        <button className="montserrat btn">Logout</button>
      </div>

    </nav>  
    <Messages/>
    </>
  );
}

export default AdminPanel;
