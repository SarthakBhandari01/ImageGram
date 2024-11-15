import express from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  updatePost,
} from "../../controllers/postController.js";
import { uploader } from "../../config/multerConfig.js";
import { validate } from "../../validator/zodValidator.js";
import { zodPostSchema } from "../../validator/zodPostSchema.js";

const router = express.Router();

router.post("/", uploader.single("image"), validate(zodPostSchema), createPost);
router.get("/", getAllPost);
router.delete("/", deletePost);
router.put("/", uploader.single("image"), updatePost);
export default router;
