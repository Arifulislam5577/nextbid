import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.listen(process.env.PORT || 5000, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`App is running at ${process.env.PORT || 5000}`);
  }
});
