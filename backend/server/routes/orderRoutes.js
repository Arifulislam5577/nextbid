import express from "express";
import { getUserOrder } from "../controllers/orderControllers.js";
import { verifyUser } from "../middlewares/verifyUser.js";
const router = express.Router();

router.route("/").get(verifyUser, getUserOrder);

export default router;
