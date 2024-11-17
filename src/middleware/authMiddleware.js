import { checkIfUserExist } from "../services/userService.js";
import { verifyToken } from "../utils/jwt.js";

export const isAuthenticated = (req, res, next) => {
  //check if the jwt is passed in the header
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(404).json({ success: false, message: "Token is required" });
  }

  //verify token
  try {
    const response = verifyToken(token);

    const doesUserExist = checkIfUserExist(response.email);
    if (!doesUserExist) {
      return res.status(404).json({ success: false, message: "user not found" });
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

