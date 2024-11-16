import { createUser, findUserByEmail } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const createUserService = async (createUserObject) => {
  try {
    const user = await createUser(createUserObject);
    return user;
  } catch (error) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      throw {
        status: 400,
        message: "user with the same email or username already exist",
      };
    }
    throw error;
  }
};

export const signinUserService = async (userDetails) => {
  try {
    // 1. check if there is a valid registered user with the email
    const user = await findUserByEmail(userDetails.email);
    if (!user) {
      throw {
        status: 404,
        message: "user not found",
      };
    }

    //2. compare the password
    const isValidPassword = bcrypt.compareSync(
      userDetails.password,
      user.password
    );
    if (!isValidPassword) {
      throw {
        status: 401,
        message: "Invalid password",
      };
    }

    const token = await generateToken({
      email: user.email,
      id: user._id,
      username: user.username,
    });
    return token;
  } catch (error) {
    throw error;
  }
};
