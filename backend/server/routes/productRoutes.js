import express from "express";
import {
  createNewProduct,
  getProducts,
} from "../controllers/productControllers.js";
const productRouter = express.Router();

productRouter.route("/").post(createNewProduct).get(getProducts);

export default productRouter;
