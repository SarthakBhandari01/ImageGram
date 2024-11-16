import { createUser } from "../repositories/userRepository.js";

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
