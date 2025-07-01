const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Login = require('./models/loginModel');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const loginRoutes = require('./routes/loginRoutes')

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//db connect
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err));


//routes 
app.use('/api/login',loginRoutes);


const createAdminUser = async() =>{
    const existingAdmin = await Login.findOne({email : 'admin@gmail.com'});

    try {
         if(!existingAdmin){
    
        const password = 'admin123'    
        const hassedPassword = await bcrypt.hash(password,10);

        const newAdmin = new Login({
            userName:'Admin',
            email:'admin@gmail.com',
            password:hassedPassword,
        });
        await newAdmin.save();
        console.log('saves successfully');
    }else{
        console.log('user alrady Exists');
    }
}
    catch(err){
        console.log('admin creation error ',err.message);
    }
};

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  createAdminUser();  
});