import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isSell: {
      type: Boolean,
      default: false,
    },
    sellerName: {
      sellerName: { type: String, required: true },
      sellerImg: { type: String, required: true },
      sellerEmail: { type: String, required: true },
      sellerCountry: { type: String, required: true },
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model("product", productSchema);
export default Product;
