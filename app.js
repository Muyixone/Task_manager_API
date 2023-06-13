const express = require('express');

const tasks = require('./routes/tasks');
const notFound = require('./middlewares/notfound');
const connectDB = require('./db/dbconnection');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const startDBandServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(
      port,
      console.log(`Express server listening on port ${port}!!!`)
    );
  } catch (error) {
    console.log(error);
  }
};

startDBandServer();
