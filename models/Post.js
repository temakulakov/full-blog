import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: Array,
      default: [],
    },
    viewCount: {
      type: Number,
      default: 0,
    }
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", PostSchema);
