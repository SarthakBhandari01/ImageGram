import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routes/apiRouter.js";
import { isAuthenticated } from "./middleware/authMiddleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./utils/swaggerOptions.js";

const app = express(); //create  express app server instance

const PORT = 3000; //port number

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.get("/hello", isAuthenticated, (req, res) => {
  console.log(req.user);
  res.json({ message: "Hello World" });
});

app.use("/api", apiRouter); //if the url starts with "/api" then the request is forwarded to apiRouter.

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  connectDB();
});
