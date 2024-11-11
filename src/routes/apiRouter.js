//This api router is triggered when any request  starting with /api comes
import express from "express";
import postRouter from "./post.js";
import userRouter from "./user.js";

const router = express.Router();

router("/posts",postRouter); //if in the remaining url ie. after "/api" we have "/posts" then request is 
//forwarded to postRouter

router("/users",userRouter);//if in the remaining url ie. after "/api" we have "/users" then request is 
//forwarded to userRouter

export default router;
