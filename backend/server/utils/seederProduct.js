import dotenv from "dotenv";
import Product from "../model/productModel.js";
dotenv.config();
import { connectDB } from "./connectDB.js";
import { products } from "./data.js";
connectDB();
const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Product deleted");
    await Product.insertMany(products);
    console.log("Product added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
