import express from "express";
import {
  createNewProduct,
  getProductById,
  getProducts,
} from "../controllers/productControllers.js";
const productRouter = express.Router();

productRouter.route("/").post(createNewProduct).get(getProducts);
productRouter.route("/:id").get(getProductById);
export default productRouter;
