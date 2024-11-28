import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    likeableId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },
    onModel: {
      type: String,
      required: true,
      enum: ["Comment", "Post"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const like = mongoose.model("Like", likeSchema);

export default like;
