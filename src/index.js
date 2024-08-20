const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const cors = require('cors');

const app = express();

// Use the cors middleware
app.use(cors());

const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Import routes
const bookRoutes = require('./routes/books');

// Use routes
app.use('/api/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});