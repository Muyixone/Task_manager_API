const express = require('express');

const tasks = require('./routes/tasks');
const connectDB = require('./db/dbconnection');

require('dotenv').config();

const app = express();

const PORT = 5000;

//middlewares
app.use(express.json());

app.get('/home', (req, res) => {
  res.send('Welcome to the home page!!!');
});

app.use('/api/v1/tasks', tasks);

const startDBandServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(
      PORT,
      console.log(`Express server listening on port ${PORT}!!!`)
    );
  } catch (error) {
    console.log(error);
  }
};

startDBandServer();
