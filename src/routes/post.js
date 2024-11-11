import express from "express";
import { createPost, getAllPost } from "../controllers/postController.js";
import { uploader } from "../config/multerConfig.js";

const router = express.Router();

router.post("/", uploader.single("image"), createPost);
router.get("/", getAllPost);

export default router;
