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
import { isAdmin, isAuthenticated } from "../../middleware/authMiddleware.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const filename = fileURLToPath(import.meta.url);
export const _dirname = dirname(filename);

const router = express.Router();

router.post(
  "/",
  isAuthenticated,
  uploader.single("image"),
  validate(zodPostSchema),
  createPost
);

/**
 * @swagger
 * /post:
 *    get:
 *      summary: Get all the post
 *      description: Get all the post
 */
router.get("/", getAllPost);
router.delete("/", isAuthenticated, deletePost);
router.put("/", isAuthenticated, isAdmin, uploader.single("image"), updatePost);
export default router;
