import uploadToCloud from "uploadimgtocloud";
import Product from "../model/productModel.js";

export const createNewProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      coverPhoto,
      oldPrice,
      newPrice,
      category,
      sellerInfo,
    } = req.body;

    const uploadProductImg = await uploadToCloud({
      cloudName: process.env.CLOUD_NAME,
      apiKey: process.env.CLOUD_API_KEY,
      apiSecret: process.env.CLOUD_API_SECRET,
      folderName: "nextBid",
      height: 1200,
      width: 768,
      image: coverPhoto,
    });

    const product = new Product({
      name,
      description,
      coverPhoto: uploadProductImg,
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
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res) => {
  console.log("Route Working...");
};
