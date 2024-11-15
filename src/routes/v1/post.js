import express from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  updatePost,
} from "../../controllers/postController.js";
import { uploader } from "../../config/multerConfig.js";

const router = express.Router();

router.post("/", uploader.single("image"), createPost);
router.get("/", getAllPost);
router.delete("/", deletePost);
router.put("/", uploader.single("image"), updatePost);
export default router;
