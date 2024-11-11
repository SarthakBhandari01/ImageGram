//This api router is triggered when any request  starting with /api comes
import express from "express";
import v1Router from "./v1/v1.js"; 
import v2Router from "./v2/v2.js"
const router = express.Router();

router.use("/v1",v1Router);

router.use("/v2",v2Router);
export default router;
