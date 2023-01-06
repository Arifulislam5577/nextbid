import expressAsyncHandler from "express-async-handler";
import Product from "../model/productModel.js";
import { uplaodImg } from "../utils/uploadImg.js";

export const createNewProduct = expressAsyncHandler(async (req, res, next) => {
  const {
    name,
    description,
    coverPhoto,
    oldPrice,
    newPrice,
    category,
    sellerInfo,
  } = req.body;

  const imgUrl = await uplaodImg(coverPhoto);

  const product = new Product({
    name,
    description,
    coverPhoto: imgUrl,
    oldPrice,
    newPrice,
    category,
    sellerInfo,
  });
  const createdProduct = await product.save();

  if (!createdProduct) {
    throw new Error("Product Created Failed");
  }
  return res.status(201).json({ message: "Product created successfully" });
});

export const getProducts = expressAsyncHandler(async (req, res) => {
  let { name, category, isFeatured, sort, page, limit, price } = req.query;
  const queryObj = {};

  if (category) {
    queryObj.category = category;
  }
  if (isFeatured) {
    queryObj.isFeatured = isFeatured;
  }

  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }
  if (price) {
    const priceRange = price.split(",");
    queryObj.newPrice = { $gte: priceRange[0], $lte: priceRange[1] };
  }

  let apiData = Product.find(queryObj).populate("sellerInfo");

  if (sort) {
    apiData = apiData.sort(sort);
  }

  const pageNum = page * 1 || 1;
  const limitNum = limit * 1 || 6;
  const skip = (pageNum - 1) * limitNum;
  apiData = apiData.skip(skip).limit(limitNum);

  const products = await apiData;
  const totalDocuments = await Product.countDocuments();

  return res
    .status(200)
    .json({ totalDocuments, result: products.length, products });
});

export const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  const relatedProduct = await Product.find({
    category: product.category,
    _id: { $nin: [product._id] },
  });

  return res.status(200).json({ product, relatedProduct });
});
