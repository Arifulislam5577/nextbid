import mongoose from "mongoose";

const { Schema, model } = mongoose;

const biderSchema = new Schema(
  {
    biderInfo: {
      biderName: { type: String, required: true },
      biderImg: { type: String, required: true },
      biderEmail: { type: String, required: true },
      biderCountry: { type: String, required: true },
    },
    productInfo: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    bidAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Bider = model("bider", biderSchema);
export default Bider;
