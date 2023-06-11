const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Get all tasks');
});

router.get('/:taskID', (req, res, next) => {
  res.send('Get single task');
});

router.post('/', (req, res, next) => {
  res.send('create a new task');
});

router.patch('/:taskID', (req, res, next) => {
  res.send('update existing task');
});

router.delete('/:taskID', (req, res, next) => {
  res.send('Delete a task');
});

module.exports = router;
