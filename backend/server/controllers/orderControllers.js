import asyncHandler from "express-async-handler";
import Order from "../model/orderModel.js";

export const getUserOrder = asyncHandler(async (req, res) => {
  const order = await Order.find(req.query).populate("productInfo");
  res.status(200).json(order);
});
