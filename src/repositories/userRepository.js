import mongoose from "mongoose";
import User from "../schema/user.js";
export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const findAllUser = async () => {
  try {
    const user = await User.find({});
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (createUserObject) => {
  try {
    const user = await User.create(createUserObject)
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

