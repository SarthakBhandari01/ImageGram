import cloudinaryModule from "cloudinary";
import {
  cloudinary_api_key,
  cloudinary_api_secret,
  cloudinary_CloudName,
} from "./serverConfig.js";
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: cloudinary_CloudName,
  api_key: cloudinary_api_key,
  api_secret: cloudinary_api_secret,
});

export {cloudinary};


