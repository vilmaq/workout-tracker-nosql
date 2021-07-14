const Workout = require("../models/workouts");

const getWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$workout.duration" },
        },
      },
    ]);
    res.json(allWorkouts);
  } catch (error) {
    res.status(500).json({ message: "Not able to get the workouts" });
  }
};

const addExercise = async (req, res) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, {
      $push: { workout: req.body },
    });
    res.json(updatedWorkout);
  } catch (error) {
    res.status(500).json({ message: "Failed to update the workout" });
  }
};
const createWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.json(newWorkout);
  } catch (error) {
    res.status(500).json({ message: "Failed to create new workout" });
  }
};
const getWorkoutsInRange = async (req, res) => {
  try {
    const getWorkoutsByRange = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$workout.duration" },
        },
      },
    ])
      .sort(descending("_id"))
      .limit(7);
    res.json(getWorkoutsByRange);
  } catch (error) {
    res.status(500).json({ message: "Failed to load workouts in range" });
  }
};

module.exports = {
  getWorkouts,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
};
