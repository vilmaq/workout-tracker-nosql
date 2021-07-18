# Workout-Tracker-Nosql (Homework 18)

# Description

This is a workout tracker application where a user can view, create and track daily workouts. The user can log multiple exercises ad part of a workout in a given day.

For this assignment, the front end has already been provided and it is required to create a a Mongo database and the Express routes to make the application work.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## User Journeys

1. The user can add exercises to the most recent workout plan.

   ```
   const addExercise = async (req, res) => {
   try  { const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, {
      $push: { workout: req.body },
    });
    res.json(updatedWorkout);
   } catch (error) {
    res.status(500).json({ message: "Failed to update the workout" });
   }
   }
   ```

2. The user can add new exercises to a new workout plan.

```
const createWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.json(newWorkout);
  } catch (error) {
    res.status(500).json({ message: "Failed to create new workout" });
  }
};
```

3. The user can view the combined weight of multiple exercises from the past seven workouts on the `stats` page.

```

const getWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$workout.weight" },
        },
      },
    ]);
    res.json(allWorkouts);
  } catch (error) {
    res.status(500).json({ message: "Not able to get the workouts" });
  }
};
```

4. The user can view the total duration of each workout from the past seven workouts on the `stats` page.

```

const getWorkoutsInRange = async (req, res) => {
try {
const getWorkoutsByRange = await Workout.aggregate([
{
$addFields: {
totalDuration: { $sum: "$workout.duration" },
},
},
])
.sort({ \_id: -1 })
.limit(7);
res.json(getWorkoutsByRange);
} catch (error) {
res.status(500).json({ message: "Failed to load workouts in range" });
}

```

## Links

- [GitHub](https://github.com/vilmaq/workout-tracker-nosql)

- [Heroku](https://pacific-spire-75760.herokuapp.com/)
