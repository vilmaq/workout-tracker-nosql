const router = require("../view/html");

const {
  getWorkouts,
  addExercise,
  createWorkout,
  getWorkoutsRange,
} = require("../../controllers/api");

const routes = require("express").Router();

router.get("workouts/", getWorkouts);
router.put("workouts/:id", addExercise);
router.post("workouts/", createWorkout);
render.get("workout/range", getWorkoutsRange);

module.exports = router;
