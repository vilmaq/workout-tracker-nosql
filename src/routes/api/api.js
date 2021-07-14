const router = require("express").Router();

const {
  getWorkouts,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
} = require("../../controllers/api");

router.get("workouts/", getWorkouts);
router.put("workouts/:id", addExercise);
router.post("workouts/", createWorkout);
router.get("workouts/range", getWorkoutsInRange);

module.exports = router;
