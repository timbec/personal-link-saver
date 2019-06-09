const express = require('express'); 
const connectDB = require('./config/db'); 

const app = express(); 

// Connects Database
connectDB(); 

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Personal Link Saver App' })); 

//Define our routes
app.use('/api/users', require('./routes/users')); 
app.use('/api/auth', require('./routes/auth')); 
app.use('/api/links', require('./routes/links')); 



const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`erver started on port ${PORT}`)); 