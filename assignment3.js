const express = require("express");
const app = express();


app.get("/student/:id", (req, res) => {
    const studentId = req.params.id;
    const name = req.query.name;
    const course = req.query.course;

    res.send(
        `Student ID: ${studentId}<br>` +
        `Name: ${name || "Not provided"}<br>` +
        `Course: ${course || "Not provided"}`
    );
});


app.listen(3000, () => {
    console.log("Assignment 3 running on port 3000");
});