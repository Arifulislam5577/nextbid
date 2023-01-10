import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name required"],
    },
    description: {
      type: String,
      required: [true, "Description required"],
    },
    coverPhoto: {
      type: String,
      required: [true, "Cover photo required"],
    },

    newPrice: {
      type: Number,
      required: [true, "New price required"],
    },
    category: {
      type: String,
      required: [true, "Category name required"],
    },
    lastDate: {
      type: String,
      required: [true, "Last date required"],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isSold: {
      type: Boolean,
      default: false,
    },
    sellerInfo: { type: mongoose.Types.ObjectId, required: true, ref: "user" },
    newBuyerInfo: { type: mongoose.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

const Product = model("product", productSchema);
export default Product;
