const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
connectDB();

console.log(notes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((note) => note._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
