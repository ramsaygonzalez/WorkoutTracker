const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    required: "Enter workout type"
  },
  name: {
    type: String,
    required: "Enter workout name"
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
