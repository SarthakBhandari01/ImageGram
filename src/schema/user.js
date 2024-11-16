import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
userSchema.pre("save", function modifyPassword(next) {
  //incoming user object
  const user = this; //object with plain password

  const SALT = bcrypt.genSaltSync(4);

  //hash password
  const hashedPassword = bcrypt.hashSync(user.password, SALT);

  //replace the plain password with hashed password
  user.password = hashedPassword;
  
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
