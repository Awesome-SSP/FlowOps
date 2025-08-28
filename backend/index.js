const express = require('express');
const cors = require('cors')
const authRoutes = require('./routes/auth')
const uploadRoutes = require('./routes/uploadRoutes.js')
const formRoutes = require('./routes/form')
const contactRoutes = require('./routes/contactRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
// duplicate import removed
// Middleware
app.use(cors({
  origin: '*',           // allow all origins
  methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false     // set to true if you want cookies/auth headers to be sent
}));

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});



// Routes
app.use('/api/auth', authRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/form', formRoutes)
app.use('/api/contact', contactRoutes);
// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});