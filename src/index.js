import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routes/apiRouter.js";

const app = express(); //create  express app server instance

const PORT = 3000; //port number

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  connectDB();
});
