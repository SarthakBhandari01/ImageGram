import { createUserService } from "../services/userService.js";

export async function getProfile(req, res) {
  //call service layer
  console.log("inside getProfile");
  return res.json({
    success: false,
    message: "Profile fetched successfully",
    data: null,
  });
}

export async function createUser(req, res) {
  try {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = await createUserService({ username, password, email });

    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
