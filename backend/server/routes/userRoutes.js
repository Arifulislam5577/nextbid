import express from "express";
import { createUser } from "../controllers/userControllers.js";
import { verifyUser } from "../middlewares/verifyUser.js";
const router = express.Router();

router.route("/").post(verifyUser, createUser);

export default router;
