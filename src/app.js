const express = require('express');

const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  res
    .status(200)
    .send({ message: "Running..." });
});

module.exports = app;
