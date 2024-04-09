const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/tictactoe", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const GameResult = mongoose.model("GameResult", {
  winnerName: String,
});

app.post("/saveWinner", async (req, res) => {
  try {
    const { winnerName } = req.body;
    const gameResult = new GameResult({ winnerName });
    await gameResult.save();
    res.status(200).send("Winner saved successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving winner");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
