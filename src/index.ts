import express from "express";
import dotenv from "dotenv";
import router from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/auth", router);
app.use("/user", userRoutes);

console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("JWT_SECRET:", process.env.JWT_SECRET);

const PORT = process.env.PORT || 5200;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
