import express from "express";
import { createNewProduct } from "../controllers/productControllers.js";
const productRouter = express.Router();

productRouter.route("/").post(createNewProduct);

export default productRouter;
