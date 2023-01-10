import Bider from "../model/bidModel.js";
import asyncHandler from "express-async-handler";
import Product from "../model/productModel.js";
import { productAllInfo } from "../services/productServices.js";
// CREATE NEW BID IN PRODUCT

export const createNewBid = asyncHandler(async (req, res) => {
  const { userInfo, productInfo, amount } = req.body;
  const product = await Product.findById(productInfo);
  if (product?.newPrice > amount) {
    return res
      .status(400)
      .json({ message: `Please bid minimum $${product?.newPrice}` });
  }
  const newBid = new Bider({ userInfo, productInfo, amount });
  const bid = await newBid.save();
  if (!bid) {
    return res.status(404).json({ message: "Bid Create Failed" });
  }
  return res.status(201).json({ message: "Bid Created Success" });
});

// GET ALL THE BID OF PRODUCT

export const getProductBid = asyncHandler(async (req, res) => {
  const { productInfo } = req.query;
  const product = await Product.findById({ _id: productInfo });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  const { totalBid, lastThreeBid, highestBid } = await productAllInfo(product);

  res.status(200).json({
    totalBid,
    lastThreeBid,
    highestBid,
  });
});
