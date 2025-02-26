import express from "express";
import dotenv from "dotenv";
import router from "./routes/auth.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/auth", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
