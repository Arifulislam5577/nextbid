import expressAsyncHandler from "express-async-handler";
import Bider from "../model/bidModel.js";
import Order from "../model/orderModel.js";
import Product from "../model/productModel.js";
import ApiService from "../services/ApiServices.js";
import { addThreeDays, productAllInfo } from "../services/productServices.js";
import { uplaodImg } from "../utils/uploadImg.js";

export const createNewProduct = expressAsyncHandler(async (req, res, next) => {
  const {
    name,
    description,
    coverPhoto,
    newPrice,
    category,
    sellerInfo,
    lastDate,
  } = req.body;

  const imgUrl = await uplaodImg(coverPhoto);
  const product = await Product.create({
    name,
    description,
    coverPhoto: imgUrl,
    newPrice,
    category,
    sellerInfo,
    lastDate,
  });

  if (!product) {
    return res.status(500).json({ message: "Product Created Failed" });
  }
  return res.status(201).json({ message: "Product created successfully" });
});

export const getProducts = expressAsyncHandler(async (req, res) => {
  let totalDocuments;
  if (typeof req.query.isSold !== "undefined") {
    totalDocuments = await Product.find({
      isSold: req.query.isSold,
    }).countDocuments();
  } else {
    totalDocuments = await Product.find({}).countDocuments();
  }

  const apiServices = new ApiService(
    Product.find().populate("sellerInfo"),
    req.query
  )
    .search()
    .filter()
    .sort()
    .paginate();

  const products = await apiServices.query;

  return res
    .status(200)
    .json({ totalDocuments, result: products.length, products });
});

export const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate("sellerInfo");

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  const { relatedProduct } = await productAllInfo(product);

  return res.status(200).json({
    product,
    relatedProduct,
  });
});

export const updateProductById = expressAsyncHandler(async function (req, res) {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const productBid = await Bider.find({
    productInfo: product._id,
  }).sort({ createdAt: -1, amount: -1 });

  if (productBid.length > 0) {
    // UPDATE PRODUCT SOLD STATUS
    product.isSold = true;
    const updatedProduct = await product.save();
    if (!updatedProduct) {
      return res.status(500).json({ message: "Product not Updated" });
    }

    // CREATE A NEW ORDER

    const newOrder = new Order({
      productInfo: product._id,
      buyerInfo: productBid[0].userInfo,
      amount: productBid[0].amount,
    });

    const order = await newOrder.save();

    if (!order) {
      return res.status(500).json({ message: "Order Not Created" });
    }

    return res.status(200).json({ message: "updated successfull", sold: true });
  }

  const updateDate = addThreeDays(product.lastDate);
  product.lastDate = updateDate;
  const updatedProduct = await product.save();
  if (!updatedProduct) {
    return res.status(500).json({ message: "Product not Updated" });
  }
  return res.status(200).json({ message: "updated successfull" });
});

export const getSoldProduct = expressAsyncHandler(async (req, res) => {});
