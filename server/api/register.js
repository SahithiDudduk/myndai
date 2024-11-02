// api/register.js
import mongoose from 'mongoose';
import User from '../models/User'; // Adjust this path if necessary
import bcrypt from 'bcrypt';

const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  }
};

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { email, mobileNumber, username, password } = req.body;

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, mobileNumber, username, password: hashedPassword });

      // Save the user
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
