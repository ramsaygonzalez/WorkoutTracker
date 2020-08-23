const Workout = require("../models/workout.js");

module.exports = function (app) {
    app.post("/api/workouts", (req, res) => {
        Workout.create()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        Workout.find(req.body)
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("api/workouts/range", (req, res) => {
        Workout.find(req.body).then(dbWorkouts => {
            res.json(dbWorkouts);
        }).catch(err => {
            res.status(400).json(err);
        });
    });

}

