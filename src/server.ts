import express from "express";

const port = 3333;
const app = express();

app.get("/ads", (req, res) => {
  return res.send([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
    { id: 4, name: "Anúncio 4" },
  ]);
});

app.listen(port);
