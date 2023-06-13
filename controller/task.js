const taskModel = require('../models/tasks_models');
const asyncWrapper = require('../middlewares/asyncWrapper');
const customAPIError = require('../error/errorClass');

const getAllTasks = async (req, res) => {
  const tasks = await taskModel.find({});
  res.status(200).json({ data: tasks });
};

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { taskID } = req.params;
  const tasks = await taskModel.findOne({ _id: taskID });
  // if the task has the correct number of params strings,
  // but no resource with such Id in the DB
  if (!tasks) throw new customAPIError('TASK_NOT_FOUND');
  return res.status(200).json({ data: tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const name = req.body;
  const tasks = await taskModel.create(name);
  res.status(200).json({ data: tasks });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { taskID } = req.params;
  const name = req.body;
  const task = await taskModel.findOneAndUpdate({ _id: taskID }, name, {
    new: true,
    runValidators: true,
  });
  // if the task has the correct number of params strings,
  // but no resource with such Id in the DB
  if (!task) throw new customAPIError('TASK_NOT_FOUND');

  res.status(200).json({ data: task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { taskID } = req.params;
  const task = await taskModel.findOneAndDelete({ _id: taskID });
  // if the task has the correct number of params strings,
  // but no resource with such Id in the DB
  if (!task) throw new errorConstructorAPI('TASK_NOT_FOUND');

  res.status(200).json({ success: true });
});

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
