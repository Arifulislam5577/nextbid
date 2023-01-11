import express from "express";
import {
  createNewProduct,
  getProductById,
  getProducts,
  updateProductDate,
} from "../controllers/productControllers.js";
const productRouter = express.Router();

productRouter.route("/").post(createNewProduct).get(getProducts);
productRouter.route("/:id").get(getProductById).patch(updateProductDate);

export default productRouter;
