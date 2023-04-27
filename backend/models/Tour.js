import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    address: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },
   
    category: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
