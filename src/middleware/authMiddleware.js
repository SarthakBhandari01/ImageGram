import { checkIfUserExist } from "../services/userService.js";
import { verifyToken } from "../utils/jwt.js";

export const isAuthenticated = async (req, res, next) => {
  //check if the jwt is passed in the header
  const token = req.headers["x-access-token"];
  if (!token) {
    return res
      .status(404)
      .json({ success: false, message: "Token is required" });
  }

  //verify token
  try {
    const response = verifyToken(token);

    const doesUserExist = await checkIfUserExist(response.email);
    if (!doesUserExist) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    req.user = response;
    next();
  } catch (error) {
    return res.status(401).json({
      success: true,
      message: "Invalid token",
    });
  }
};

export const isAdmin = async (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "unauthorized",
    });
  }
  next();
};
