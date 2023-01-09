import express from "express";
import { createNewBid, getProductBid } from "../controllers/bidControllers.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const bidRouter = express.Router();

bidRouter.route("/").post(verifyUser, createNewBid).get(getProductBid);

export default bidRouter;
