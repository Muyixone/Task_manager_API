const express = require('express');

const tasks = require('./routes/tasks');

const app = express();

const PORT = 5000;

app.get('/home', (req, res) => {
  res.send('Welcome to the home page!!!');
});

app.use('/api/v1/tasks', tasks);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!!!`);
});
