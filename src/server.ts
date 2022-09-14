import express from "express";

const port = 3333;
const app = express();

app.get("/games", (req, res) => res.json({}));

app.post("/ads", (req, res) => res.status(201).json({}));

app.get("/games/:id/ads", (req, res) => {
  const gameId = req.params.id;

  return res.send();
});

app.get("/ads/:id/discord", (req, res) => {
  const adId = req.params.id;

  return res.status(200).json({});
});

app.listen(port);
