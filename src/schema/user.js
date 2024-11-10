import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      unique: true,
      minlength: 5,
      required: true,
      validate: {
        validator: function (emailvalue) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          return emailRegex.test(emailvalue);
        },
        message: "Invalid Email Formate",
      },
    },
    password: {
      type: String,
      minlength: 5,
      required: true,
    },
  },
  { timestamps: true }
);

const user=mongoose.model("user",userSchema);

export default user;