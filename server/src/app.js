import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Tasbiha");
});

export default app;
