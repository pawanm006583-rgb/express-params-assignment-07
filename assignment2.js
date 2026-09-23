const express = require("express");
const app = express();


app.get("/search", (req, res) => {
    const name = req.query.name;
    const course = req.query.course;

    
    if (!name && !course) {
        return res.send("No search data provided.");
    }

    res.send(`Name: ${name || "Not provided"}<br>Course: ${course || "Not provided"}`);
});


app.listen(3000, () => {
    console.log("Assignment 2 running on port 3000");
});