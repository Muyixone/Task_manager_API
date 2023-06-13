const express = require('express');

const tasks = require('./routes/tasks');
const notFound = require('./middlewares/notfound');
const connectDB = require('./db/dbconnection');

require('dotenv').config();

const app = express();

const PORT = 5000;

//middlewares
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use('*', notFound);

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
