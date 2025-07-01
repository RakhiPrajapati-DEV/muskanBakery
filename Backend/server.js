const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Login = require('./models/loginModel');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const loginRoutes = require('./routes/loginRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/api/login', loginRoutes);

// Create default admin user
const createAdminUser = async () => {
  try {
    const existingAdmin = await Login.findOne({ email: 'admin@gmail.com' });

    if (existingAdmin) {
      console.log('⚠️ Admin user already exists');
      return;
    }

    const plainPassword = 'admin123';
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const newAdmin = new Login({
      userName: 'Admin',
      email: 'admin@gmail.com',
      password: hashedPassword,
    });

    await newAdmin.save();
    console.log('✅ Admin user created successfully');
  } catch (err) {
    console.error('Error creating admin user:', err.message);
  }
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  createAdminUser();
});
