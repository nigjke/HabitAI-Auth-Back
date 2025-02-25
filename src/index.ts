import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";

dotenv.config();
const app = express();
const PORT = 5000;

async function main() {
  app.use(express.json());
  app.use("/auth", authRoutes);
  app.listen(PORT, () => console.log(`Server start on Port : ${PORT}`));
}
main();
