const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    day: {
        type: Date, default: new Date
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter a name for a workout"
        },
        type: {
            type: String,
            trim: true,
            required: "Enter a type of workout"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Enter your duration for this exercise"
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }]
},
    {
    toJSON:{
        virtuals: true
    }
    }
);

workoutsSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    },0)
});

const Workout = mongoose.model("Workout", workoutsSchema);

module.exports = Workout;