const express = require('express');
const cors = require("cors");

// const userRoutes = require("./routes/userRoutes.js");
// const habitRoutes = require("./routes/habitRoutes.js");
const app = express();

app.use(cors());
app.use(express.json());


// app.use("/", userRoutes);
// app.use("/api/habits", habitRoutes);

module.exports = app;
