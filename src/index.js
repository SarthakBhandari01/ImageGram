import express from "express";
import connectDB from "./config/dbConfig.js";
import postRouter from "./routes/post.js";
import userRouter from "./routes/user.js";

const app = express(); //create  express app server instance

const PORT = 3000; //port number

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

// app.use(express.json()); //middleware to parse json data (Deserialize binary data to json data)
// app.use(express.text()); //middleware to parse text data (Deserialize binary data to text data)

// app.get("/ping", (req, res) => {
//   console.log(req.query);
//   console.log(req.body);
//   res.send("pong");
// });
// app.post("/hello/:name", (req, res) => {
//   const name = req.params.name;

//   res.json({ message: `Post:hello world ${name}` });
// })

app.get("/", (req, res) => {
  res.send("home");
});

// app.get("/posts",getAllPost);
// app.post("/posts", uploader.single("image"), createPost);

app.use("/posts", postRouter); // if the  url has "/post" then use the postRouter to handle the request

app.use("/user",userRouter); //if the url has "/user" then use the userRouter to handle the request

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  connectDB();
});
