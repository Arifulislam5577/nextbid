import express from "express";
import {
  createNewProduct,
  getProductById,
  getProducts,
  updateProductById,
} from "../controllers/productControllers.js";
import { verifyUser } from "../middlewares/verifyUser.js";
const productRouter = express.Router();

productRouter.route("/").post(createNewProduct).get(getProducts);
productRouter.route("/:id").get(getProductById).patch(updateProductById);

export default productRouter;
