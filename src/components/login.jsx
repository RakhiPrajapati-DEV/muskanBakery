import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/images/logo/logo.jpg';


const Login = ()=> {
    const[userName , setUserName] = useState('');
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    
    const navigate = useNavigate();

   const handleform = async (e)=>{
    e.preventDefault();

    try{
        const response = await axios.post('http://localhost:5000/api/login',{email,password});
        if(response.data.user.email == 'admin@gmail.com'){
            navigate('/adminPanel');
        }else{
            navigate('/About');
        }
    }catch(err){
        alert('Login failed: ' + (err.response?.data?.message || err.message));
    }
   }

    return (
        <div className='MainLogin'>
            <form className='loginForm' onSubmit={handleform}>

                <div className="mb-3 firstMain">
                    <img src={logo} alt="" />
                    <h2>LOGIN </h2>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Username</label>
                    <input type="text" className="form-control custom-red-focus" value={userName} onChange={(e)=>setUserName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control custom-red-focus" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control custom-red-focus" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary submitLogin">Submit</button>

            </form>
        </div>
    )
}

export default Login;
