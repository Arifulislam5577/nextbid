import express from "express";
import { getUserOrder } from "../controllers/orderControllers.js";
import {
  createPaymentIntent,
  paymentSuccess,
} from "../controllers/paymentControllers.js";
import { verifyUser } from "../middlewares/verifyUser.js";
const router = express.Router();

router.route("/").get(verifyUser, getUserOrder);
router.route("/:orderId").post(verifyUser, createPaymentIntent);
router.route("/success").patch(verifyUser, paymentSuccess);

export default router;
