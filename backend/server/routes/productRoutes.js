import express from "express";
import {
  createNewProduct,
  getProduct,
} from "../controllers/productControllers.js";
const productRouter = express.Router();

productRouter.route("/").get(getProduct).post(createNewProduct);

export default productRouter;
