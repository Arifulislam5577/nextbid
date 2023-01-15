import express from "express";
import {
  createNewProduct,
  getProductById,
  getProducts,
  updateProductById,
  updateProductInBg,
} from "../controllers/productControllers.js";
const productRouter = express.Router();

productRouter
  .route("/")
  .post(createNewProduct)
  .get(getProducts)
  .patch(updateProductInBg);
productRouter.route("/:id").get(getProductById).patch(updateProductById);

export default productRouter;
