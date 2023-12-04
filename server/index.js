
const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());

app.use(cors());

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Create endpoints
app.get("/api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
  res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
    console.log("GET /weather/:temperature endpoint reached");
    const { temperature } = req.params;
  const phrase = `<h3>It was ${temperature} today</h3>`;
  res.status(200).send(phrase);
});