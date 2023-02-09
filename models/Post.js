import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: Array,
      default: [],
    },
    like: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Post', PostSchema);
