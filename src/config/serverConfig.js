import dotenv from "dotenv";

dotenv.config();

export const db_url = process.env.db_url;
export const cloudinary_api_key = process.env.cloudinary_api_key;
export const cloudinary_api_secret = process.env.cloudinary_api_secret;
export const cloudinary_CloudName = process.env.cloudinary_CloudName;
export const JWT_SECRET = process.env.JWT_SECRET;
