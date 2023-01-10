import Bider from "../model/bidModel.js";
import Product from "../model/productModel.js";

export const productAllInfo = async (product) => {
  const productBidInfo = await Bider.find({ productInfo: product._id }).sort({
    amount: -1,
    createdAt: 1,
  });

  const totalBid = productBidInfo.length;
  const highestBid = productBidInfo.length ? productBidInfo[0].amount : 0;

  const lastThreeBid = await Bider.find({ productInfo: product._id })
    .limit(3)
    .sort({ createdAt: -1 })
    .populate("userInfo");

  const relatedProduct = await Product.find({
    category: product.category,
    isSold: false,
    _id: { $nin: [product._id] },
  }).populate("sellerInfo");

  return {
    totalBid,
    lastThreeBid,
    highestBid,
    relatedProduct,
  };
};
