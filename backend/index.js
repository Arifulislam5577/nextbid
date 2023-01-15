import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import productRouter from "./server/routes/productRoutes.js";
import userRouter from "./server/routes/userRoutes.js";
import orderRouter from "./server/routes/orderRoutes.js";
import bidRouter from "./server/routes/biderRoutes.js";
import { connectDB } from "./server/utils/connectDB.js";
import {
  errorHandler,
  notFound,
} from "./server/middlewares/errorMiddleware.js";
import { updateProductInBg } from "./server/controllers/productControllers.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// CLOUDINARY SETUP
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// ALL ROUTES

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((req, res, next) => {
  updateProductInBg();
  next();
});

app.use("/api/v1/products", productRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/bid", bidRouter);
app.use("/api/v1/order", orderRouter);

//ERROR HANDLEING

app.use(notFound);
app.use(errorHandler);

connectDB();

app.listen(process.env.PORT || 5000, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`App is running at ${process.env.PORT || 5000}`);
  }
});
