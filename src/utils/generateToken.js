import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";

export const generateToken = async (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
};
