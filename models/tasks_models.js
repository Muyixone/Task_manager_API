const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Task name is required'],
    maxlength: 70,
    trim: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', taskSchema);
