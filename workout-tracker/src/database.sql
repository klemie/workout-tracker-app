CREATE DATABASE workoutDataBase;

CREATE TABLE exercise(
    exercise_id SERIAL PRIMARY KEY,
    description VARCHAR(500),
    title VARCHAR(250),
    type,
    reps VARCHAR(250)

); 