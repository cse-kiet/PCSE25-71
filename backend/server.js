const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Enable CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://pcse-25-71.vercel.app/'],
  credentials: true
}));

// Middleware for parsing JSON bodies
app.use(express.json());


// Import routes
const uploadRoutes = require('./routes/uploadRoutes');
const tableRoutes = require('./routes/tableRoutes');

// Use routes
app.use('/api/upload', uploadRoutes);
app.use('/api/tables', tableRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

