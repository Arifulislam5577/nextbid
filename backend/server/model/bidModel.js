import mongoose from "mongoose";

const { Schema, model } = mongoose;

const biderSchema = new Schema(
  {
    userInfo: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "user",
    },
    productInfo: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "product",
    },
    amount: { type: Number, required: true },
    isWinner: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Bider = model("bider", biderSchema);
export default Bider;
