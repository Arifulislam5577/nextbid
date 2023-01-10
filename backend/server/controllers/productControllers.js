import expressAsyncHandler from "express-async-handler";
import Product from "../model/productModel.js";
import ApiService from "../services/ApiServices.js";
import { productAllInfo } from "../services/productServices.js";
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
  const totalDocuments = await Product.countDocuments();
  const apiServices = new ApiService(
    Product.find().populate("sellerInfo"),
    req.query
  )
    .search()
    .filter()
    .sort()
    .paginate(req.query.limit ? req.query.limit : 6);

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
