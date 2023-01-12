import mongoose from "mongoose";

const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    productInfo: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "product",
      unique: true,
    },
    buyerInfo: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Order = model("order", orderSchema);
export default Order;
