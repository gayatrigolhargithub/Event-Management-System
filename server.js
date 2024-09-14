const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const eventRoutes = require('./routes/eventRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/events', eventRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Your existing routes and middleware go here...

// Root route ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Event Management System!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

