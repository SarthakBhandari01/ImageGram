import express from "express";
import {
  createUser,
  getProfile,
  signin,
} from "../../controllers/userController.js";
import { zodSignUpSchema } from "../../validator/zodSignUpSchema.js";
import { validate } from "../../validator/zodValidator.js";
import { zodSignInSchema } from "../../validator/zodSignInSchema.js";

const router = express.Router();
router.get("/profile", getProfile);
router.post("/signup", validate(zodSignUpSchema), createUser);
router.post("/signin", validate(zodSignInSchema), signin);
export default router;
