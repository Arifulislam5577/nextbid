import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.connect(process.env.DATABASE_URL_HOSTED, () => {
    if (process.env.NODE_ENV !== "PRODUCTION") {
      console.log("Database connection established");
    }
  });
};
