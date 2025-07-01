import React from 'react';
import logo from '../assets/images/logo/logo.jpg';
import { Link } from 'react-router-dom';

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
    
    <div className='sider'>
      <ul>
        <li>
          <Link to="/Admin/messages" className='mssgLink'>Messages</Link>
        </li>
      </ul>
    </div>
    </>
  );
}

export default AdminPanel;
