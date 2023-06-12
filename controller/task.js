const { default: mongoose } = require('mongoose');
const taskModel = require('../models/tasks_models');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    res.status(200).json({ data: tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { taskID } = req.params;
    const tasks = await taskModel.findOne({ _id: taskID });
    // if the task has the correct number of params strings,
    // but no resource with such Id in the DB
    if (!tasks) return res.status(404).json({ message: ' Task not found' });

    res.status(200).json({ data: tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const name = req.body;
    const tasks = await taskModel.create(name);
    res.status(200).json({ data: tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskID } = req.params;
    const name = req.body;
    const task = await taskModel.findOneAndUpdate({ _id: taskID }, name, {
      new: true,
      runValidators: true,
    });
    if (!task)
      return res.status(404).json({ message: `No task with ID: ${taskID}` });

    res.status(200).json({ data: task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { taskID } = req.params;
    const task = await taskModel.findOneAndDelete({ _id: taskID });
    if (!task)
      return res.status(404).json({ message: `No task with ID: ${taskID}` });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
