import express from "express";
import { createUser, getProfile } from "../../controllers/userController.js";
import { zodSignUpSchema } from "../../validator/zodSignUpSchema.js";
import { validate } from "../../validator/zodValidator.js";

const router = express.Router();
router.get("/profile", getProfile);
router.post("/signup", validate(zodSignUpSchema), createUser);
export default router;
