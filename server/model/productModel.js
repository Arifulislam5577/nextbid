import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name required"],
      maxLength: 100,
    },
    description: {
      type: String,
      required: [true, "Description required"],
    },
    coverPhoto: {
      type: String,
      required: [true, "Cover photo required"],
    },
    oldPrice: {
      type: Number,
      required: [true, "Old price required"],
    },
    newPrice: {
      type: Number,
      required: [true, "New price required"],
    },
    category: {
      type: String,
      required: [true, "Category name required"],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isSell: {
      type: Boolean,
      default: false,
    },
    sellerInfo: {
      sellerName: { type: String, required: [true, "Seller name required"] },
      sellerImg: { type: String, required: [true, "Seller image required"] },
      sellerEmail: { type: String, required: [true, "Seller email required"] },
      sellerCountry: {
        type: String,
        required: [true, "Seller Category required"],
      },
    },
    newBuyer: {
      buyerName: { type: String, default: "" },
      buyerImg: { type: String, default: "" },
      buyerEmail: { type: String, default: "" },
      buyerCountry: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

const Product = model("product", productSchema);
export default Product;
