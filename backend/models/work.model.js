const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Workout = mongoose.model('Workout', workSchema);

module.exports = Workout;