const getAllTasks = (req, res) => {
  res.send('Get all tasks');
};

const getSingleTask = (req, res) => {
  res.send('Get single task');
};

const createTask = (req, res) => {
  res.send('create a new task');
};

const updateTask = (req, res) => {
  res.send('update existing task');
};

const deleteTask = (req, res) => {
  res.send('Delete a task');
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
