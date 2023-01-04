import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./server/routes/productRoutes.js";
import userRouter from "./server/routes/userRoutes.js";
import { connectDB } from "./server/utils/connectDB.js";
import {
  errorHandler,
  notFound,
} from "./server/middlewares/errorMiddleware.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: false }));

// ALL ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/v1/products", productRouter);
app.use("/api/v1/user", userRouter);

//ERROR HANDLEING

app.use(notFound);
app.use(errorHandler);

connectDB();

app.listen(process.env.PORT || 5000, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`App is running at ${process.env.PORT || 5000}`);
  }
});
