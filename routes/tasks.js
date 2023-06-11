const {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controller/task');

const express = require('express');

const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);

router
  .route('/:taskID')
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask);

module.exports = router;
