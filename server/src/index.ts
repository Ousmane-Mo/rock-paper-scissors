import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import playerRoutes from "./routes/player.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const mongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/rps-game";

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/players", playerRoutes);

// Connect to MongoDB
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });
